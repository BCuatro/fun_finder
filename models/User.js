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
    slogan: {
      type: String,
      default: "I love meeting new people on Fun Finder"
    },
    pronouns: {
      type: String,
      default: ""
    },
    profilePic: {
      type: String,
      default: "https://fun-finder-dev.s3.amazonaws.com/uploads/1658921921896-Default_Profile_Pic.jpeg"
    },
    aboutMePicA: {
      type: String,
      default: "https://fun-finder-dev.s3.amazonaws.com/uploads/1658921842988-Default_Photo_A.jpeg"
    },
    aboutMePicB: {
      type: String,
      default: "https://fun-finder-dev.s3.amazonaws.com/uploads/1658919034367-Default_Photo_B.jpeg"
    },
    aboutMePicC: {
      type: String,
      default: "https://fun-finder-dev.s3.amazonaws.com/uploads/1658919211036-Default_Photo_C.jpeg"
    },
    
    // birthdate: {
    //   type: Date,
    //   default: ""
    // },

    date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = User = mongoose.model('User', UserSchema);