module.exports = function () {
  var fs = require('fs');
  var config = require('../config/config')();

  var service = {
    getFiles: getFiles
  };
  return service;

  /* Returns uploaded files */
  function getFiles(done) {
    var files = fs.readdirSync(config.UPLOADS);
    var listing = [];

    files.forEach(function (file, index) {
      listing.push({
        'name': file,
        'link': config.UPLOADS + file
      });
    });
    console.log('files: ' + JSON.stringify(listing, true));
    return listing;
  }
};
