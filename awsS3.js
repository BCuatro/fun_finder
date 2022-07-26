const express = require("express");
const router = express.Router();
// require("dotenv").config()
// const User = require('../../models/User');
// const bcrypt = require("bcryptjs");
// const keys = require('../../frontend/src/config/keys');
// const keys = require('config/keys')
// const jwt = require('jsonwebtoken');
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
// const passport = require('passport');
// const multer = require("multer");
// const multerS3 =require("multer-s3")
const AWS = require("aws-sdk");
const AWS_KEYS = require("./config/awsKeys");

// const path = require("path");
// const BUCKET_NAME= AWS_KEYS.bucketName

const s3 = new AWS.S3({
  accessKeyId: AWS_KEYS.accessKeyId,
  secretAccessKey: AWS_KEYS.secretAccessKey,
  region: 'us-east-1'
})

exports.s3Upload = async (file) => {

  const params = {
    Bucket: "fun-finder-dev",
    Key: `uploads/${Date.now().toString()}-${file.originalname}`,
    Body: file.buffer

  }
  return await s3.upload(params).promise()
}
