const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
// const keys = require('../../frontend/src/config/keys');
const keys = require('../../config/keys')
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');
const multer = require("multer");
const multerS3 =require("multer-s3")
const AWS = require("aws-sdk")
const AWS_KEYS = require('../../config/awsKeys')
const path = require("path");
const BUCKET_NAME= AWS_KEYS.bucketName
const s3 = new AWS.S3({
    accessKeyId: AWS_KEYS.accessKeyId,
    secretAccessKey: AWS_KEYS.secretAccessKey,
    region: 'us-east-1'
})


const params = {
    Bucket: BUCKET_NAME
}



const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ) {
        cb(null, true);
    } else {
        cb(new Error('Please upload a JPG, JPEG or PNG file'), false);
    }
}

const upload = multer({
    fileFilter,
    storage: multerS3({
      s3: s3,
      bucket: BUCKET_NAME,
      acl: "public-read",
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, `${Date.now().toString()}`+"-"+file.originalname)
      }
    })
  })

// router.get("/test",  (req, res)=>{
//     res.json({msg: "This is the user route"})
// });
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        fname: req.user.fname,
        email: req.user.email,
        lname: req.user.lname,
        gender: req.user.gender,
        pronouns: req.user.pronouns,
        slogan: req.user.slogan,
        // profilepicture: req.user.profilepicture
    });
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400). json(errors);
    }

    User.findOne({ "email": req.body.email })
      .then(user => {
        if (user) {
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
          const newUser = new User({
            id: req.user.id,
            fname: req.body.fname,
            lname: req.body.lname,
            // gender: req.body.gender,
            // birthdate: req.body.birthdate,
            email: req.body.email,
            password: req.body.password,
          })

          bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                .then((user) => {
                    const payload ={
                        id: user.id, 
                        fname: user.fname,
                        email: user.email,
                        lname: user.lname,

                     };
                
                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600},(err, token) =>{
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    
                    })
                })
                .catch(err => console.log(err))
            })
          })
         
        }
    })
})

router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email})
    .then(user => {
        if (!user){
            return res.status(404).json ({ email: "This user does not exist"});
        }
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                 const payload ={
                    id: user.id, 
                    fname: user.fname,
                    email: user.email,
                    lname: user.lname,
                    pronouns: user.pronouns,
                    gender: user.gender,
                    slogan: user.slogan,
                 }
                 jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600},
                    (err, token) =>{
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                 )
            } else {
                return res.status(400).json({password: "Invalid Password" })
            }
        })
    })
})


router.patch("/:id",
  passport.authenticate("jwt", {session: false }),
  (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
      fname: req.body.fname,  
      lname: req.body.lname,   
      gender: req.body.gender,  
      slogan: req.body.slogan, 
      pronouns: req.body.pronouns    
    }, { new: true })
    .then(user=> res.json(user))
    .catch(error => res.status(404).json(error))
})

router.get("/:id", (req, res) => {
    console.log(req.params)
    User.findById(req.params.id)
      .then(
        user => 
        {
            console.log(user)
            res.json(user)
        })
      .catch(err => res.json(err))
})


module.exports = router;
