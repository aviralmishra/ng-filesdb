module.exports = function () {
  var aws = require('aws-sdk');
  var config = require('../config/config')();

  aws.config.loadFromPath(config.AWS_CONFIG);

  var filesDbS3 = new aws.S3({params: {Bucket: config.AWS_S3_BUCKET}});
  return filesDbS3;
};
