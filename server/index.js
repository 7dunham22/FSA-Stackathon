/* eslint-disable no-undef */
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
// const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

// app.listen(port, function () {
//   console.log('Knock, knock');
//   console.log("Who's there?");
//   console.log(`Your server, listening on port ${port}`);
// });
