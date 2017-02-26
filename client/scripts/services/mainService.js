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
        service.PayForWorkshop = PayForWorkshop;

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
            return $http.post(ConfigService.BaseURI() + '/registerWorkshop.php', params).then(handleSuccess, handleRemoteError);
        }

        function PayForWorkshop(params) {
            var headers =  {
                'X-Api-Key': 'edb9b35399ff9858a2602861ff14d301',
                'X-Auth-Token': '16ddfecc26956b97490d55117c6dd58e'
            };

            var payload = {
                purpose: 'FIFA 16',
                amount: '2500',
                phone: '9999999999',
                buyer_name: 'John Doe',
                redirect_url: 'http://abacus.org.in',
                send_email: true,
                webhook: 'https://www.instamojo.com/@csea/',
                send_sms: true,
                email: 'dsreenevasan@gmail.com',
                allow_repeated_payments: false
            };

            return $http.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers});
        }

        function handleRemoteError(data) {
            return data;
        }

        function handleSuccess(data) {
            return data;
        }

    }

})();
