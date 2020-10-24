const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
// ELEPHANTSQL URI
const URI = `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@lallah.db.elephantsql.com:5432/${process.env.USERNAME}`;
// create a pool with the database URI
const pool = new Pool({ connectionString: URI });
/* ** DB Schema is as follows:
  ...
   ** And instructions for use are:
*/
// Export an object with the query property as a function that logs the query
// and then returns pool.query() with the same arguments passed in
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
