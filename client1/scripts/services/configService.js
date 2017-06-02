(function () {
    'use strict';

    angular
        .module('abacus')
        .factory('ConfigService', ConfigService);

    ConfigService.$inject = ['$http','$rootScope'];
    function ConfigService($http,$rootScope) {
        var service={};
        var server = {
            "local": "localhost",
            "wedo" : "abacus.org.in/php",
            "port": "3306"
        };
        service.BaseURI = BaseURI;
        return service;

        function BaseURI()
        {
            return "http://192.168.1.108:8080";
        }

    }
})();