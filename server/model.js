const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ELEPHANTSQL URI
const URI = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@lallah.db.elephantsql.com:5432/${process.env.USERNAME}`;

// create a pool with the database URI
const pool = new Pool({ connectionString: URI });
/* ** DB Schema is as follows:
  CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    first_name character varying(50),
    last_name character varying(50),
    email character varying(320) NOT NULL UNIQUE,
    type character varying(4),
    email_consent boolean DEFAULT false,
    took_assessment boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT now()
  );
   ** And instructions for use are:
*/

// Export an object with the query property as a function that logs the query
// and then returns pool.query() with the same arguments passed in
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
