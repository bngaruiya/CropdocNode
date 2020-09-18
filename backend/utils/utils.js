const jwt = require('jsonwebtoken');

function issueJWT(user) {
  const _id = user._id;
  const expiresIn = '1h';
  const payload = {
    sub: _id,
    iat: Date.now(),
  };
  // Issue JWT
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
  return {
    token,
    expiresIn,
  };
}

module.exports.issueJWT = issueJWT;
