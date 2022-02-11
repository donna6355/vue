const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    lastname: {
      type: String,
      maxlength: 50,
    },
    role: { type: Number, default: 0 },
    image: String,
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password"))
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  else next();
});

//methods
UserSchema.methods.comparePassword = function (plainPW, cb) {
  bcrypt.compare(plainPW, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

UserSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "Isaac");
  user.token = token;
  user.save((err, user) => {
    if (err) return cb(err);
    return cb(null, user);
  });
};

UserSchema.statics.findByToken = function (token, cb) {
  var user = this;
  jwt.verify(token, "Isaac", (err, decode) => {
    user.findOne({ _id: decode, token: token }, (err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("user", UserSchema);

module.exports = { User };
