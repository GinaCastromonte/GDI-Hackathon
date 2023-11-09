const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;