;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('SampleController', SampleController);

    SampleController.$inject = ['$state', '$compile', '$scope', '$window'];

    function SampleController($state, $compile, $scope, $window){

        var ctrl = this;
        console.log("Success1");
        /*$window.location.reload();*/
        ctrl.windowWidth = $(window).width();
        console.log($(window).width());

        ctrl.events = [{name: 'textathon'}, {name: 'ninjaCoding'}, {name: 'OSPC'}, {name: 'Geeks 2g'}, {name: 'House full'}];
        ctrl.marginLeftValue = 10;
        console.log(getWidth(30));
        ctrl.midDiv = 2;
        setMargin();
        setBigDiv();

        function setBigDiv() {
            ctrl.bigDivEvent = ctrl.events[ctrl.midDiv%ctrl.events.length].name;
        }

        function setMargin() {
            ctrl.marginLeft = ctrl.marginLeftValue + "px";
        }

        function getWidth(percentage){
            return percentage/100*ctrl.windowWidth;
        }

        ctrl.move = function(key){
            console.log(key.keyCode);
            if(key.keyCode == 39){
                ctrl.marginLeftValue += 200;
                ctrl.midDiv--;
                setBigDiv();
                setMargin();
            }
            if(key.keyCode == 37){
                ctrl.marginLeftValue -= 200;
                ctrl.midDiv++;
                setBigDiv();
                setMargin();
            }
            console.log(ctrl.marginLeft);
        };

        ctrl.changeLeft = function(){
            console.log("ngTouch");
            var obj = {
                keyCode: 37
            };
            ctrl.move(obj);
        };

        ctrl.changeRight = function(){
            console.log("ngTouch");
            var obj = {
                keyCode: 39
            };
            ctrl.move(obj);
        }

        ctrl.setFocus = function(){
            $window.document.getElementById('navigation').focus();
        }

    }

})();
