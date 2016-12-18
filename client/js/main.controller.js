;(function() {
  'use strict';

  angular
    .module('abacus')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$compile', '$scope'];

  function MainController($state, $compile, $scope){

    var ctrl = this;
    console.log("Success!");
    ctrl.showNav = false;
    ctrl.maxWidth = 0;

    ctrl.displayNav = function() {
      ctrl.maxWidth = ctrl.maxWidth === 0 ? '50px' : 0;
      ctrl.showNav = !ctrl.showNav;
    };

    ctrl.stateChange = function($page) {
      $state.go($page);
    };
  }

})();
