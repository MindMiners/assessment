const client = require('@mailchimp/mailchimp_marketing');
const Mailchimp = require('mailchimp-api-v3');
const md5 = require('md5');
const dotenv = require('dotenv');
const db = require('./model');

dotenv.config();
const mailchimp = new Mailchimp(process.env.API);

const controller = {};

controller.postUserDB = (req, res, next) => {
  try {
    // build our query to post to/update the database
    const query =
    `INSERT INTO contacts (first_name, last_name, email, type, email_consent, took_assessment)
    VALUES($1, $2, $3, $4, $5, $6)
    ON CONFLICT (email) DO UPDATE SET
    first_name = $1,
    last_name = $2,
    type = $4,
    email_consent = $5,
    took_assessment = $6`;

    // get all user details from the request body
    const {
      firstName, lastName, email, type, emailConsent, tookAssessment,
    } = req.body;

    // put together the details in the correct order so they can be used in the query
    const userDetails = [firstName, lastName, email, type, emailConsent, tookAssessment];

    // post the user details to the db!
    db.query(query, userDetails)
      .then(() => {
        return next()
      })
      .catch((err) => next(err));

  } catch (err) {
    next(err);
  }
};

controller.postUserMC =  async (req, res, next) => {
  const listID = process.env.LISTID;
  const subscriberHash = `${md5(req.body.email.toLowerCase())}`;
  const { tookAssessment } = req.body;
  const { emailConsent } = req.body;

  // if they don't consent to emails, we don't want them in mailchimp
  // so let's just move on!
  if (!emailConsent) {
    return next();
  }

  // otherwise we'll continue with the rest below

  // set up the mailchimp client so we can connect to it
  client.setConfig({
    apiKey: process.env.API,
    server: process.env.SERVERID,
  });

  // we're going to run a GET below and we'll change this depending on
  // whether the member exists in mailchimp yet
  let doesExist;

  // check to see if the user exists
  const run = async () => {
    const response = await client.lists.getListMember(
      listID, 
      subscriberHash
    );
  };
  
  await run().then(() => {
    // if we successfully found them, set this to true
    doesExist = true;
  }).catch((e) => {
    // otherwise it's false
    doesExist = false;
  });

  // if the person is not in mailchimp yet...
  if (doesExist === false) {
    // go ahead and add them to the list
    mailchimp.post(`/lists/${listID}/members`,
      {
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
          FNAME: req.body.firstName,
          LNAME: req.body.lastName
        },
        // if they took the assessment, we'll send their type and "took assessment"
        // otherwise we just send the type
        tags: tookAssessment ? [req.body.type, 'took assessment'] : [req.body.type]
      }
    );
  }

  // if they are in mailchimp already...
  if (doesExist) {
    // remove their type tags first, in case their type is different this time
    await mailchimp.post(`/lists/${listID}/members/${subscriberHash}/tags`,
      {
        tags: [
          {
            name: 'SeTi',
            status: 'inactive'
          },
          {
            name: 'SeFi',
            status: 'inactive'
          },
          {
            name: 'SiTe',
            status: 'inactive'
          },
          {
            name: 'SiFe',
            status: 'inactive'
          },
          {
            name: 'NeTi',
            status: 'inactive'
          },
          {
            name: 'NeFi',
            status: 'inactive'
          },
          {
            name: 'NiTe',
            status: 'inactive'
          },
          {
            name: 'NiFe',
            status: 'inactive'
          },
          {
            name: 'TiSe',
            status: 'inactive'
          },
          {
            name: 'TiNe',
            status: 'inactive'
          },
          {
            name: 'FiSe',
            status: 'inactive'
          },
          {
            name: 'FiNe',
            status: 'inactive'
          },
          {
            name: 'FeSi',
            status: 'inactive'
          },
          {
            name: 'FeNi',
            status: 'inactive'
          },
          {
            name: 'TeSi',
            status: 'inactive'
          },
          {
            name: 'TeNi',
            status: 'inactive'
          },
        ]
      }
    )
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log('Had trouble removing old type tags from a member: ', err);
      });

    // next, update the person's details
    // first, let's save the object we'll pass in if they took the assessment
    const typeAndAssessment = {
      tags: [
        {
          name: req.body.type,
          status: 'active'
        },
        {
          name: 'took assessment',
          status: 'active'
        }
      ]
    }

    // and also save the object if they didn't take the assessment but have a type assign to them
    const typeOnly = {
      tags: [
        {
          name: req.body.type,
          status: 'active'
        }
      ]
    }

    // if they took assessment, we'll use the typeAndAssessment tags, otherwise, we'll use the typeOnly tag object
    const tagObject = tookAssessment ? typeAndAssessment : typeOnly;

    // test to see if there's something happening on the hosted server that's different from
    // running it locally
    console.log(tagObject);

    // and then add their type tag and "took assessment" if it's not present already
    mailchimp.post(`/lists/${listID}/members/${subscriberHash}/tags`, tagObject)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.log('Had trouble adding new type and "took assessment" tags to member: ', err);
      });
  }

  return next();
}

module.exports = controller;
