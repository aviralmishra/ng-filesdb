(function () {
  'use strict';

  angular.module('filesApp', [
      'ngRoute',
      'app.common',
      'app.upload',
      'app.view'
    ])
    .constant('CONSTANTS', {
      'MESSAGES': {
        'UPLOAD_PATH_MISSING': 'Please select the file to upload.',
        'UPLOAD_SUCCESS': 'The file is uploaded successfully.',
        'UPLOAD_FAILURE': 'An error occurred while uploading the file.',
        'VIEW_FAILURE': 'An error occurred while retrieving the files.'
      }
    });
})();
