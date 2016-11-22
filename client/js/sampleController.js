;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('SampleController', SampleController);

    SampleController.$inject = ['$state', '$compile', '$scope', '$window'];

    function SampleController($state, $compile, $scope, $window){

        var ctrl = this;
        ctrl.leftMargin = 10;
        ctrl.divPosition = 0;
        /*$window.location.reload();*/
        ctrl.windowWidth = $(window).width();
        console.log($(window).width());

        ctrl.events = [{name: 'Debugging'}, {name: 'Heptathlon'}, {name: 'textathon'}, {name: 'ninjaCoding'}, {name: 'OSPC'}, {name: 'Geeks 2g'}, {name: 'House full'}];
        ctrl.marginLeftValue = ctrl.leftMargin;
        console.log(getWidth(30));
        ctrl.midDiv = Math.floor(ctrl.events.length/2);
        setMargin();
        setBigDiv();

        function setBigDiv() {
            if(ctrl.midDiv < 0){
                ctrl.midDiv = ctrl.events.length-1;
            }
            ctrl.bigDivEvent = ctrl.events[ctrl.midDiv%ctrl.events.length].name;
        }

        function setMargin() {
            ctrl.marginLeft = ctrl.marginLeftValue + "%";
        }

        function getWidth(percentage){
            return percentage/100*ctrl.windowWidth;
        }

        ctrl.marginValue = [-15, 5, 25, 45, 65, 85, 105];
        ctrl.margins = ['-15%', '5%', '25%', '45%', '65%', '85%', '105%'];

        ctrl.move = function(key){
            console.log(key.keyCode);
            if(key.keyCode == 39){
                ctrl.marginLeftValue += ctrl.leftMargin;
                ctrl.midDiv--;
                setBigDiv();
                setMargin();
                ctrl.divPosition++;

                /*$('div').css('margin-left', '85%');*/

                /*$('div').filter(function() {
                    var finalDiv = $(this).css('height') == '20vh';
                    console.log("finalDiv" + finalDiv);
                });*/
               /* var parent = document.getElementById('navigation');
                var child = document.createElement('div');
                child.className = 'rollDiv';
                parent.appendChild(child);*/
                /*angular.forEach(ctrl.marginValue, function(value, key){
                   if(value != 85){
                       ctrl.marginValue[key] = value + 20;
                   }
                    else{
                       ctrl.marginValue[key] = 5;
                   }
                    ctrl.margins[key] = ctrl.marginValue[key] + '%';
                });
                console.log(ctrl.margins);
                console.log(ctrl.marginValue);*/
            }
            if(key.keyCode == 37){
                ctrl.marginLeftValue -= ctrl.leftMargin;
                ctrl.midDiv++;
                setBigDiv();
                setMargin();
                if(ctrl.divPosition == 0){
                    ctrl.divPosition = 35;
                }
                ctrl.divPosition--;

            }
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
        };

        ctrl.setFocus = function(){
            $window.document.getElementById('navigation').focus();
        };

    }

})();
