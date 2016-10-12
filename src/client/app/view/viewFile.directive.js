(function () {
  'use strict';

  angular
    .module('app.view')
    .directive('fileView', fileView);

  /* @ngInject */
  function fileView() {
    var directive = {
      bindToController: true,
      controller: viewCtrl,
      controllerAs: 'pm',
      restrict: 'EA',
      scope: {
        file: '=',
        downloadFile: '&'
      },
      templateUrl: 'app/view/file.html'
    };

    /* @ngInject */
    function viewCtrl() {
      /* jshint validthis: true */
      var pm = this;
    }

    return directive;
  }
})();
