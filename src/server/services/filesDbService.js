module.exports = function () {
  var fs = require('fs');
  var config = require('../config/config')();

  var service = {
    getFiles: getFiles
  };
  return service;

  /* Returns uploaded files */
  function getFiles(done) {
    fs.readdir(config.UPLOADS, function (err, contents) {
      if (err) {
        console.log(err, err.stack);
        done(err, null);
      } else {
        var files = [];

        if (contents && contents.length) {
          contents.forEach(function (file, idx) {
            var fileStats = fs.statSync(config.UPLOADS + file);

            files.push({
              'name': file,
              'link': file,
              'date': fileStats.ctime
            });
          });
        }
        done(null, files);
      }
    });
  }
};
