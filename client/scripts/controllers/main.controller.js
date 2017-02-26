;(function() {
  'use strict';

  angular
    .module('abacus')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$compile', '$scope', '$window', 'toaster' ,'$uibModal','$document', 'MainService', '$cookieStore'];

  function MainController($state, $compile, $scope, $window, toaster, $uibModal,$document, MainService, $cookieStore ){


    var ctrl = this;
    var bodyRef = angular.element( $document[0].body );
    console.log("Success!");
    ctrl.showNav = false;
    ctrl.maxWidth = 0;
    ctrl.loggedIn = false;
    detect();
    checkCookies();

    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();
    });

    function checkCookies() {
      if($cookieStore.get('userDetails')){
        console.log("logged in");
        ctrl.userDetails = $cookieStore.get('userDetails');
        ctrl.loggedIn = true;
      }
      else{
        console.log("not logged in");
      }
    }
    
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
        windowTopClass: 'modal-margin',
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

    ctrl.check= function(){
      console.log("-a--------------");
    //  alert('ok');
    };

    ctrl.login = function(){
      var obj = {
        email:  ctrl.email,
        pass: ctrl.password
      };

      console.log(JSON.stringify(obj));
      MainService.Login(obj).then(function (response) {
        if(response.status == 200){
          if(response.data != 404){
            toaster.pop("success", "Success", "Successfully Logged In", 3000);
            $cookieStore.put('userDetails', response.data);
            checkCookies();
          }
          else{
            toaster.pop("error", "Error", "Invalid Username or Password", 3000);
            console.log("Invalid Username or Password");
          }
        }
      })
    };

    ctrl.register = function () {

      var obj = {
       user_email : ctrl.emailId,
       user_password : ctrl.password,
       user_name: ctrl.name,
       user_phone: ctrl.phoneNumber,
       user_college: ctrl.collegeName,
       user_dept: ctrl.department,
       user_year: ctrl.year
       };

       console.log(JSON.stringify(obj));

      MainService.Register(obj).then(function (response) {
          //console.log(response);
          if(response.status == 200){
            if(response.data.a_id){
              toaster.pop("success", "Success", "Successfully Logged In", 3000);
              $cookieStore.put('userDetails', response.data);
              checkCookies();
            }
            else{
              toaster.pop("error", "Error", response.data, 3000);
              console.log(response.data);
            }
          }
       });
    };

    ctrl.logout = function(){
      $cookieStore.remove('userDetails');
      ctrl.loggedIn = false;
      toaster.pop("success", "Success", "Successfully Logged Out!");
    }
  }

})();
