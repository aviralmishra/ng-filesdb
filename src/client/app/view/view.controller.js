(function () {
  'use strict';

  angular
    .module('app.view')
    .controller('viewCtrl', viewCtrl);

  viewCtrl.$inject = ['$location', '$http', 'filesService'];

  /* @ngInject */
  function viewCtrl($location, $http, filesService) {
    /* jshint validthis: true */
    var pm = this;

    pm.files = [];
    pm.getFiles = getFiles;
    pm.downloadFile = downloadFile;
    pm.goBack = goBack;

    activate();

    function activate() {
      getFiles().then(function () {
        // console.log('Activated My Files View');
      });
    }

    function getFiles() {
      return filesService.getFiles().then(function (data) {
        pm.files = data;
      });
    }

    function downloadFile(file) {
      // console.log(angular.toJson(file, true));
    }

    function goBack() {
      $location.path('/#/');
    }
  }
})();
