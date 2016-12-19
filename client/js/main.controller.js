;(function() {
  'use strict';

  angular
    .module('abacus')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$compile', '$scope', '$window'];

  function MainController($state, $compile, $scope, $window){

    var ctrl = this;
    console.log("Success!");
    ctrl.showNav = false;
    ctrl.maxWidth = 0;
    detect();
    
    function detect () {
      angular.element(window).bind("scroll", function(){
        ctrl.page = window.pageYOffset;
        console.log(ctrl.page);
      });
    }
    ctrl.page = window.pageYOffset;
    console.log(ctrl.page);

    ctrl.displayNav = function() {
      ctrl.maxWidth = ctrl.maxWidth === 0 ? '50px' : 0;
      ctrl.showNav = !ctrl.showNav;
    };

    ctrl.stateChange = function(page) {
      $state.go(page);
    };
  }

})();
