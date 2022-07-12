const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require("bcryptjs");
// const keys = require('../../frontend/src/config/keys');
const keys = require('config/keys')
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

  module.exports = upload;