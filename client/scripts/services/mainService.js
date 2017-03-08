(function () {
    'use strict';

    angular
        .module('abacus')
        .factory('MainService',MainService);

    MainService.$inject = ['$http', '$state', '$rootScope', '$timeout', 'ConfigService'];

    function MainService($http, $state, $rootScope, $timeout, ConfigService){
        
        var service = {};

        service.Login = Login;
        service.Logout = Logout;
        service.Register = Register;
        service.RegisterWorkshop =RegisterWorkshop;
        service.RegisterSA = RegisterSA;

        return service;

        function Login(params) {
            return $http.post(ConfigService.BaseURI() + '/login.php', params).then(handleSuccess, handleRemoteError);
        }

        function Logout(params) {
            return $http.get(ConfigService.BaseURI() + '/api/logout?username=' + params.emailId, params).then(handleSuccess, handleRemoteError);
        }

        function Register(params) {
            return $http.post(ConfigService.BaseURI() + '/register.php', params).then(handleSuccess, handleRemoteError);
        }

        function RegisterWorkshop(params) {
            return $http.post(ConfigService.BaseURI() + '/workshop_reg.php', params).then(handleSuccess, handleRemoteError);
        }

        function RegisterSA(params) {
            return $http.post(ConfigService.BaseURI() + '/sa_reg.php', params).then(handleSuccess, handleRemoteError);
        }

        function handleRemoteError(data) {
            return data;
        }

        function handleSuccess(data) {
            return data;
        }

    }

})();
