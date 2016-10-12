/*jshint node:true*/
'use strict';

module.exports = function (app) {
  var multer = require('multer');
  var request = require('request');
  var config = require('../config/config')();
  var stores = require('../config/stores')();
  var filesDbService = require('../service/filesDbService')();

  // Upload setup
  var upload = multer({
    storage: stores.diskStorage
  });

  // Upload API
  app.post('/api/files/upload', upload.single('file'), function (req, res) {
    console.log(req.body);
    console.log(req.file);
    res.status(204).end();
  });

  // Retrieval API
  app.get('/api/files', function getFiles(req, res, next) {
    var files = filesDbService.getFiles();
    res.setHeader('Content-Type', 'application/json');
    res.send(files);
    res.status(200).end();
  });
};
