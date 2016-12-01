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
        ctrl.verticalDivPosition = 0;
        /*$window.location.reload();*/
        ctrl.windowWidth = $(window).width();
        /*console.log($(window).width());*/

        document.getElementById('mainTab').focus();
        ctrl.events = [{name: 'IBM', category: {id: 1}}, {name: 'IOT', category: {id: 1}},
            {name: 'ROR', category: {id: 1}}, {name: 'Big Data', category: {id: 1}},
            {name: 'Ethical Hacking', category: {id: 1}}, {name: 'Housefull', category: {id: 3}},
            {name: 'Math Maze', category: {id: 3}}, {name: 'APL', category: {id: 3}},
            {name: 'General Quiz', category: {id: 3}}, {name: 'Tech Quiz', category: {id: 3}},
            {name: 'Represent', category: {id: 3}}, {name: 'Textathon', category: {id: 3}},
            {name: 'OSPC', category: {id: 0}}, {name: 'Game Of Nerds', category: {id: 0}},
            {name: 'Cyberwars', category: {id: 5}}, {name: 'Design Mania', category: {id: 0}},
            {name: 'Webaholic', category: {id: 0}}, {name: 'Coding Hungama', category: {id: 0}},
            {name: 'Go Game', category: {id: 0}}, {name: 'Debugging', category: {id: 0}},
            {name: 'Reverse Coding', category: {id: 0}}, {name: 'Unlock The Deadlock', category: {id: 0}}];

        ctrl.genre = [{id: 1, name: 'Workshops'}, {id: 2, name: 'General - Online'}, {id: 3,name: 'General - Onsite'},
                    {id: 4, name: 'Coding - Online'}, {id: 0, name: 'Coding - Onsite'}];
        ctrl.marginLeftValue = ctrl.leftMargin;
        /*console.log(getWidth(30));*/
        /*ctrl.midDiv = Math.floor(ctrl.events.length/2);*/
        ctrl.midDiv = Math.floor(ctrl.genre.length/2);
        setMargin();
        setBigDiv();

        function setBigDiv() {
            if(ctrl.midDiv < 0){
                ctrl.midDiv = ctrl.events.length-1;
            }
            /*ctrl.bigDivEvent = ctrl.events[ctrl.midDiv%ctrl.events.length].name;*/
            /*ctrl.bigDivEvent = ctrl.genre[ctrl.midDiv%ctrl.genre.length].name;*/
            setHorizontalDivs((ctrl.midDiv+1)%ctrl.genre.length);
            ctrl.horizontalMidDiv = Math.ceil(ctrl.horizontalDivEvents.length/2);
            setHorizontalMidDiv(ctrl.horizontalMidDiv);
        }

        function setMargin() {
            ctrl.marginLeft = ctrl.marginLeftValue + "%";
        }

        function getWidth(percentage){
            return percentage/100*ctrl.windowWidth;
        }

        function setHorizontalDivs(id) {
            ctrl.horizontalDivEvents = [];
            angular.forEach(ctrl.events, function(value, key){
               if(value.category.id == (id)){
                   ctrl.horizontalDivEvents.push(value);
               }
            });
            /*console.log("id" + id + "hordivevents" + ctrl.horizontalDivEvents);*/
        }

        function setHorizontalMidDiv(horizontalMidDiv){
            ctrl.bigDivEvent = ctrl.horizontalDivEvents[horizontalMidDiv%ctrl.horizontalDivEvents.length].name;
        }

        ctrl.marginValue = [-35, -15, 3, 13, 45, 65, 85, 105, 125];
        ctrl.margins = ['-35vw', '-15vw', '3vw', '13vw', '45vw', '77vw', '87vw', '105vw', '125vw'];

        ctrl.marginTopValue = [-4, 4.9, 31.5, 39.5, 105];
        ctrl.marginsTop = ['-4%', '10vh', '65vh', '80vh', '105%'];

        ctrl.move = function(key){
            /*console.log(key.keyCode);*/
            if(key.keyCode == 39){      //right

                /*ctrl.midDiv--;*/
                if(ctrl.horizontalMidDiv == 0){
                    ctrl.horizontalMidDiv = 5 * ctrl.horizontalDivEvents.length;
                }
                ctrl.horizontalMidDiv--;
                setHorizontalMidDiv(ctrl.horizontalMidDiv);
                /*setMargin();*/
                ctrl.divPosition++;
            }
            else if(key.keyCode == 37){  //left

                /*ctrl.midDiv++;*/
                ctrl.horizontalMidDiv++;
                setHorizontalMidDiv(ctrl.horizontalMidDiv);
                /*setMargin();*/
                if(ctrl.divPosition == 0){
                    ctrl.divPosition = 45;
                }
                ctrl.divPosition--;

            }
            else if(key.keyCode == 38) {  //up
                ctrl.bigDivEvent = undefined;
                if(ctrl.verticalDivPosition == 0){
                    ctrl.verticalDivPosition = 5;
                }
                ctrl.verticalDivPosition--;
                ctrl.midDiv++;
                setBigDiv();
                /*console.log('midDiv' + ctrl.midDiv);*/
            }
            else if(key.keyCode == 40) {  //down
                ctrl.bigDivEvent = undefined;
                ctrl.verticalDivPosition++;
                if(ctrl.midDiv == 0){
                    ctrl.midDiv = 5 * ctrl.genre.length;
                }
                ctrl.midDiv--;
                setBigDiv();
                /*console.log('midDiv' + ctrl.midDiv);*/
            }
            /*console.log("vertical Div" + ctrl.verticalDivPosition);*/
        };

        ctrl.change = function(code){
          /*console.log("keycode - " + code);*/
            var obj = {
                keyCode : code
            };
            ctrl.move(obj);
        };

        ctrl.setFocus = function(){
            $window.document.getElementById('navigation').focus();
        };

    }

})();
