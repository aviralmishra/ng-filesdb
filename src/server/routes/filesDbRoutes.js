/*jshint node:true*/
'use strict';

module.exports = function (app) {
  var multer = require('multer');
  var request = require('request');

  var config = require('../config/config')();
  var stores = require('../stores/stores')();
  var s3 = require('../stores/filesDbS3')();
  var filesDbService = require('../services/filesDbService')();

  // Upload setup
  var upload = multer({
    storage: stores.s3Storage
  });

  // Upload API
  app.post('/api/files/upload', upload.single('file'), function (req, res) {
    // console.log(req.body);
    // console.log(req.file);
    res.status(204).end();
  });

  // Retrieval APIs
  app.get('/api/files', function getFiles(req, res, next) {
    var params = {
      Bucket: config.AWS_S3_BUCKET,
    };

    s3.listObjects(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        var files = [];

        if (data.Contents && data.Contents.length) {
          data.Contents.forEach(function (s3Object, idx) {
            files[idx] = {
              'name': s3Object.Key,
              'link': s3Object.Key,
              'date': s3Object.LastModified
            };
          });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(files);
        res.status(200).end();
      }
    });
  });

  app.get('/api/files/local', function getFiles(req, res, next) {
    filesDbService.getFiles(function (err, files) {
      if (err) {
        console.log(err, err.stack);
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(files);
        res.status(200).end();
      }
    });
  });
};
