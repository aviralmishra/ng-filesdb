(function () {
  'use strict';

  angular
    .module('app.common')
    .factory('filesService', filesService);

  filesService.$inject = ['$http'];

  /* @ngInject */
  function filesService($http) {
    var files = [];

    var service = {
      'getFiles': getFiles
    };

    return service;

    function getFiles() {
      return $http.get('http://localhost:4000/api/files')
        .then(function uploadComplete(data, status, headers, config) {
          return data.data;
        })
        .catch(function (message) {
          return [];
        });
    }
  }
})();
