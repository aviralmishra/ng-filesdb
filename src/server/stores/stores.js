module.exports = function () {
  var multer = require('multer');
  var multerS3 = require('multer-s3');

  var config = require('../config/config')();
  var s3 = require('./filesDbS3')();

  var diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, config.UPLOADS);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  var s3Storage = multerS3({
    s3: s3,
    bucket: config.AWS_S3_BUCKET,
    metadata: function (req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  var stores = {
    'diskStorage': diskStorage,
    's3Storage' : s3Storage
  };
  return stores;
};
