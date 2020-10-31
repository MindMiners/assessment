const db = require('./model');

const controller = {};

controller.updateUserDB = (req, res, next) => {
  const { type, data } = req.body; 
  if (type === 'unsubscribe' || type === 'subscribe') {
    let emailConsent;
    if (type === 'unsubscribe') {
      emailConsent = false;
    } else {
      emailConsent = true;
    }
    try {
      // build our query to post to/update the database
      const query =
      `INSERT INTO contacts (first_name, last_name, email, email_consent)
      VALUES($1, $2, $3, $4)
      ON CONFLICT (email) DO UPDATE SET
      first_name = $1,
      last_name = $2,
      email_consent = $4`;
  
      // get all user details from the request body's data property
      // put together the details in the correct order so they can be used in the query
      // this is first name, last name, email, and email consent
      const userDetails = [data.merges.FNAME, data.merges.LNAME, data.merges.EMAIL, emailConsent];
  
      // post the user details to the db!
      db.query(query, userDetails)
        .then(() => {
          return next()
        })
        .catch((err) => next(err));
  
    } catch (err) {
      next(err);
    }
  }
  return next();
}

module.exports = controller;