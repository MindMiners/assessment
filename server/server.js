const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./router');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve up static assets (specifically, this lets us access the CSS and JS)
// app.use(express.static(path.join(__dirname, '../assets')));

// show the home page on the root path
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../views/index.html'));
// });

// router to database
app.use('/api/db', apiRouter);

// send back a 404 error when we hit any routes we haven't defined
app.get('*', (req, res) => {
  console.log('hit an unknown route');
  res.sendStatus(404);
});

// error handler for any errors we don't catch
app.use((err) => {
  console.log('uncaught middleware error in express server ', err.message);
});

// start the server on the port we defined with a message to let us know it's running
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
