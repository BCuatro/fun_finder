const express = require("express");
const router = express.Router();

const BUCKET_NAME = "fun-finder-dev";
const AWS = require("aws-sdk");
const AWS_KEYS = require("./config/awsKeys");


const s3 = new AWS.S3({
  accessKeyId: AWS_KEYS.accessKeyId,
  secretAccessKey: AWS_KEYS.secretAccessKey,
  region: 'us-east-1'
})

exports.s3Upload = async (file) => {

  const params = {
    Bucket: BUCKET_NAME,
    Key: `uploads/${Date.now().toString()}-${file.originalname}`,
    Body: file.buffer

  }
  return await s3.upload(params).promise()
}
