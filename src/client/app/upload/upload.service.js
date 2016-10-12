(function () {
  'use strict';

  angular
    .module('app.upload')
    .factory('uploadService', uploadService);

  uploadService.$inject = ['$http', '$location', '$q'];

  /* @ngInject */
  function uploadService($http, $location, $q) {
    var readyPromise;

    var service = {
      'uploadFile': uploadFile
    };

    return service;

    function uploadFile() {
      return $http.get('http://www.omdbapi.com/?r=json&s=' + 'Inception')
        .then(function (data, status, headers, config) {
          return data.data;
        })
        .catch(function (message) {
          return null;
        });
    }
  }
})();
