angular.module('filesApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/upload/upload.html',
      controller: 'uploadCtrl',
      controllerAs: 'pm'
    })
    .when('/view', {
      templateUrl: 'app/view/view-file-list.html',
      controller: 'viewCtrl',
      controllerAs: 'pm'
    })
    .otherwise({
      redirectTo: '/'
    });
});
