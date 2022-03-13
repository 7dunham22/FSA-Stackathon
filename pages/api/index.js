const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

/* ADD THE MODEL ROUTES LATER, SUCH AS THESE.*/
// router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

// router.get('/', (req, res, next) => {
//   try {
//     res.send('Specify a more precise api route');
//   } catch (error) {
//     next(error);
//   }
// });

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/items', require('./items'));
app.use('/customers', require('./customers'));

app.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = app;
