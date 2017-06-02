;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state', '$compile', '$scope', '$cookieStore', 'MainService'];

    function IndexController($state, $compile, $scope, $cookieStore, MainService){
        //console.log($cookieStore.get('REGISTERED_SUCCESS'));

        var ctrl = this;
        
        /*ctrl.check = function() {
            var obj = {
                user_email : ctrl.email
            };

            MainService.Login(obj).then(function (response) {
                if(response.status == 200){
                    ctrl.data = response.data;
                    /!*if(response.data != 404){
                        toaster.pop("success", "Success", "Successfully Logged In", 3000);
                        $cookieStore.put('userDetails', response.data);
                        //checkCookies();
                        $window.location.reload();
                    }
                    else{
                        toaster.pop("error", "Error", "Invalid Username or Password", 3000);
                        console.log("Invalid Username or Password");
                    }*!/
                }
            })
        }*/

        ctrl.userDetails = $cookieStore.get('userDetails');
        console.log(ctrl.userDetails);
        
        


    }

})();
