const mongoose = require("mongoose");

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

const User = mongoose.model("user", UserSchema);

module.exports = { User };
