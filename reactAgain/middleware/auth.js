const { User } = require("../models/user");

let auth = (req, res, next) => {
  //fetch token from cookies
  let token = req.cookies.x_auth;
  //decode token n find user data
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
  //
};

module.exports = { auth };
