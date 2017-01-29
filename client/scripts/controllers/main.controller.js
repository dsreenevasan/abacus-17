;(function() {
  'use strict';

  angular
    .module('abacus')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$compile', '$scope', '$window' ,'$uibModal','$document'];

  function MainController($state, $compile, $scope, $window, $uibModal,$document){

    var bodyRef = angular.element( $document[0].body );
    console.log($document[0]);
    var ctrl = this;
    console.log("Success!");
    ctrl.showNav = false;
    ctrl.maxWidth = 0;
    detect();

    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });
    
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

    ctrl.resetFullpage = function() {
      $.fn.fullpage.moveTo(1);
    };

    ctrl.openModal = function(page, size){
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
      $.fn.fullpage.moveTo(1);
      bodyRef.addClass('ovh');
      var modalInstance = $uibModal.open({
        templateUrl: '../views/' + page + '.html',
        backdrop: true,
        size: size,
        /*windowTopClass: 'modal-margin',*/
        resolve: {

        }
      });
      modalInstance.result.then(function (selectedItem) {
        // Remove it on closing
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        bodyRef.removeClass('ovh');

      }, function () {
        // Remove it on dismissal
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        bodyRef.removeClass('ovh');

      });
    };
  }

})();
