const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const userRoutes = require('./routes/users');
const uploadRoutes = require('./routes/upload');

const app = express();
const db = require('./config/dbkeys').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongo Atlas Connected Successfully'))
  .catch((err) => console.log(err));

require('./config/passportJWT')(passport);
app.use(passport.initialize());

// app.use(function (req, res, next) {
//   //allow cross origin requests
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
//   res.header('Access-Control-Max-Age', '3600');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
//   );
//   next();
// });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/api/upload',
  passport.authenticate('jwt', { session: false }),
  uploadRoutes
);
app.use('/api/auth', userRoutes);

module.exports = app;
