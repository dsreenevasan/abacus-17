;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state', '$compile', '$scope' , 'ngProgressFactory'];

    function IndexController($state, $compile, $scope , ngProgressFactory){
        /*var ctrl=this;

        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.complete();*/


    }

})();
