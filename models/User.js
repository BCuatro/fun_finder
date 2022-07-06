const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: {
      type: String,
      required: true
    },

    lname: {
      type: String,
      required: true
    },

    gender: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },
    
    // birthdate: {
    //   type: Date,
    //   required: true
    // },

    date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = User = mongoose.model('User', UserSchema);