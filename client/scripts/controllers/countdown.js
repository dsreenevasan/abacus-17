;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('CountdownController', CountdownController);

    CountdownController.$inject = ['$state', '$compile', '$scope', '$interval'];

    function CountdownController($state, $compile, $scope, $interval){
        var ctrl = this;

        ctrl.countdown = 10;
        ctrl.startCountdown = false;

        ctrl.launch = function(){
            ctrl.startCountdown = true;
            var interval = $interval(function () {
                    if (ctrl.countdown - 1 > 0) {
                        ctrl.countdown = ctrl.countdown - 1;
                        console.log(ctrl.text);
                    }
                    else {
                        /*ctrl.countdown = "GO!";*/
                        $state.go('main');
                        $interval.cancel(interval);
                    }
                }
                , 1000);
        };

    }

})();
