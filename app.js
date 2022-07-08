const express = require("express");
const mongoose = require('mongoose');
const app = express()
const db = require('./frontend/src/config/keys').mongoURI;
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser');
const User = require("./models/User");
const passport = require("./frontend/src/config/passport")
// const { emit } = require("nodemon");
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

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

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users );
app.use("/api/tweets", tweets);

const port = process.env.PORT || 4000;

app.listen(port,() => console.log(`listening on port ${port}`))