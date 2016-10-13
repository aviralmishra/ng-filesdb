(function () {
  'use strict';

  angular
    .module('app.upload')
    .controller('uploadCtrl', uploadCtrl);

  uploadCtrl.$inject = ['$scope', 'FileUploader', 'CONSTANTS'];

  /* @ngInject */
  function uploadCtrl($scope, FileUploader, CONSTANTS) {
    /*jshint validthis: true */
    var pm = this;

    pm.response = '';

    pm.uploader = $scope.uploader = new FileUploader({
      url: '/api/files/upload'
    });

    // Filters
    pm.uploader.filters.push({
      name: 'customFilter',
      fn: function (item, options) {
        return this.queue.length < 10;
      }
    });

    pm.uploader.filters.push({
      'name': 'enforceMaxFileSize',
      'fn': function (item) {
        return item.size <= 1048576;
      }
    });

    // Callbacks
    pm.uploader.onWhenAddingFileFailed = function (item, filter, options) {
      // console.info('onWhenAddingFileFailed', item, filter, options);
    };
    pm.uploader.onAfterAddingFile = function (fileItem) {
      // console.info('onAfterAddingFile', fileItem);
    };
    pm.uploader.onAfterAddingAll = function (addedFileItems) {
      // console.info('onAfterAddingAll', addedFileItems);
    };
    pm.uploader.onBeforeUploadItem = function (item) {
      // console.info('onBeforeUploadItem', item);
    };
    pm.uploader.onProgressItem = function (fileItem, progress) {
      // console.info('onProgressItem', fileItem, progress);
    };
    pm.uploader.onProgressAll = function (progress) {
      // console.info('onProgressAll', progress);
    };
    pm.uploader.onSuccessItem = function (fileItem, response, status, headers) {
      // console.info('onSuccessItem', fileItem, response, status, headers);
    };
    pm.uploader.onErrorItem = function (fileItem, response, status, headers) {
      // console.info('onErrorItem', fileItem, response, status, headers);
    };
    pm.uploader.onCancelItem = function (fileItem, response, status, headers) {
      // console.info('onCancelItem', fileItem, response, status, headers);
    };
    pm.uploader.onCompleteItem = function (fileItem, response, status, headers) {
      // console.info('onCompleteItem', fileItem, response, status, headers);
    };
    pm.uploader.onCompleteAll = function () {
      // console.info('onCompleteAll');
    };

    // console.info('uploader', pm.uploader);
  }
})();
