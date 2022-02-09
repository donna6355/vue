const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
    },
    password: {
      type: String,
      maxlength: 5,
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
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };
