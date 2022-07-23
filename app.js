const express = require("express");
const mongoose = require('mongoose');
const app = express()
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser');
const User = require("./models/User");
// const passport = require("./frontend/src/config/passport")
const passport = require("passport")

const path = require('path');
const multer = require("multer");
require("dotenv").config()


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

// app.use(express.static('uploads/'));
// app.post('/upload, upload.single(profilePicture'), (req, res) =>{
//   const uploaded = req.file.location
  
// }
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//routes on app object to listen to incoming request
app.get("/",(req,res)=> {
    // const user = new User({
    //     handle: "emoney",
    //     email: "emoney@money.com",
    //     password:"money123"
    // })
    // user.save()
    res.send("What's Poppin!");

});
// import initialize from 'passport';
app.use(passport.initialize());
require("./config/passport")(passport);
// app.use('/uploads/',express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users );
// app.use("/api/tweets", tweets);
app.use((error,req,res, next)=> {
  if (error instanceof multer.MulterError){
    if (error.code === "LIMIT_FILE_SIZE"){
      return res.status(400).json({
        message: "file is too large"
      })
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE"){
      return res.status(400).json({
        message: "File must be an image"
      })
    }
  }
})

const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`listening on port ${port}`))