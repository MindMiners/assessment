const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbRouter = require('./dbRouter');
const mcRouter = require('./mcRouter');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve up static assets (specifically, this lets us access the CSS and JS in our bundle)
app.use(express.static(path.join(__dirname, '../public/build')));

// show the main page on the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// router to database
app.use('/api/db', dbRouter);

// mc webhook callback url
app.use('/api/mc', mcRouter);

// send back a 404 error when we hit any routes we haven't defined
app.get('*', (req, res) => {
  console.log('hit an unknown route');
  res.sendStatus(404);
});

// error handler for any errors we don't catch
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// start the server on the port we defined with a message to let us know it's running
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
