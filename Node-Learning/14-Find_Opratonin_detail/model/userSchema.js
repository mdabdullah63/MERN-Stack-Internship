const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  salary: Number,
  isMarried: Boolean,

  skills: [String],

  address: {
    street: String,
    city: String,
    pincode: Number,
  },

  marks: [
    {
      subject: String,
      marks: Number,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
userSchema.index({ email: 1 });

const User= mongoose.model("User",userSchema)

module.exports = User;
