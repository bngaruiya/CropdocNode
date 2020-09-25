const bcrypt = require('bcrypt');
const User = require('../models/user');
const utils = require('../utils/utils');
const jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  console.log(req.headers);
  if (req.headers && req.headers.authorization) {
    const authorization = req.headers.authorization.split(' ')[1];
    console.log(authorization);
    try {
      decoded = jwt.verify(authorization, process.env.JWT_SECRET);
      console.log(decoded);
    } catch (e) {
      return res.status(401).send('Invalid User. Cannot Load');
    }
    const userId = decoded.sub;
    User.findOne({ _id: userId }).then((user) => {
      console.log(user);
      res.status(200).json({
        user,
        msg: 'User Loaded Successfully',
      });
    });
  }
};

exports.signup = (req, res, next) => {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        bcrypt.hash(password, 10).then((hash) => {
          if (hash) {
            // Insert user into db
            const newUser = new User({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: hash,
            });
            // save user
            newUser.save().then((user) => {
              const jwt = utils.issueJWT(user);
              res.status(201).json({
                msg: 'Your account has been created successfully.',
                user,
                token: jwt.token,
                expiresIn: jwt.expiresIn,
              });
            });
          } else {
            res.status(409).json({
              msg:
                'An error occured when creating your account. Refresh your browser and try again.',
            });
          }
        });
      } else {
        res.status(409).json({
          msg: 'A user with a similar email address already exists.',
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password).then((valid) => {
        if (valid) {
          const jwt = utils.issueJWT(user);
          res.status(200).json({
            msg: 'Login Successful.',
            user,
            token: jwt.token,
            expiresIn: jwt.expiresIn,
          });
        } else {
          return res.status(401).json({
            msg: 'Incorrect Password. Please try again.',
          });
        }
      });
    } else {
      return res.status(401).json({
        msg: 'User not found',
      });
    }
  });
};

exports.logout = (req, res, next) => {
  console.log('User Logout Called');
};
