;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('WorkshopsController', WorkshopsController);

    WorkshopsController.$inject = ['$state', '$compile', '$scope', '$window'];

    function WorkshopsController($state, $compile, $scope, $window){

        var ctrl = this;
        ctrl.divPosition = 0; //for horizontal div movement
        ctrl.verticalDivPosition = 0; //for vertical div movement
        ctrl.show = 1;
        ctrl.isMobile = false;
        ctrl.showOverlay = true;
        detectmob();

        function detectmob() {
            if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)) {
                ctrl.isMobile = true;
                /*$window.open('http://lite.kurukshetra.org.in');*/
            }
        }

        /*Setting focus to the div to listen to arrow keys*/
        document.getElementById('bg').focus();

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="tooltip"]').tooltip();
        });

        /*Background color generation*/
        /* var rn = Math.floor((Math.random() * 150) + 60);
         var rs = Math.floor((Math.random() * 11) + 4);
         var t = new Trianglify({
         x_gradient: Trianglify.colorbrewer.Spectral[rs],
         noiseIntensity: 0,
         cellsize: rn
         });
         var pattern = t.generate(window.innerWidth, window.innerWidth+200);
         var element = document.getElementById('bg');
         element.setAttribute('style', 'background-image: '+pattern.dataUrl);*/


        /*Events Details in the form of JSON*/
        ctrl.eventDetails = [
            {genreId: 1, genre: "Workshops", events: [
                {id: 1, name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    image: "../images/events/ospc.jpg"},
                /*{id: 1, name: "Data Mining",
                 image: "../images/workshop/mining.jpg"},
                 {id: 2, name: "Internet Of Things",
                 image: "../images/workshop/iot.jpg"},
                 {id: 3, name: "Ruby On Rails",
                 image: "../images/workshop/ruby.jpg"},
                 {id: 4, name: "IBM bluemix and Dockers",
                 image: "../images/events/bluemix.jpg"},
                 {id: 5, name: "Big Data",
                 image: "../images/events/ospc.jpg"}*/],
                /*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [45], margins :['45vw']}
        ];

        /*To track the centre div*/
        ctrl.centreDiv = {
            genreId : 0,
            eventId : 1
        };
        ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);

        /*ctrl.marginValue = [-35, -15, 3, 14, 45, 79, 89, 105, 125];
         ctrl.margins = ['-35vw', '-15vw', '3vw', '14vw', '45vw', '79vw', '89vw', '105vw', '125vw'];*/

        ctrl.marginValue = [-35, -25, -15, 7, 45, 81, 105, 115, 125];
        ctrl.margins = ['-35vw', '-25vw', '-15vw', '7vw', '45vw', '81vw', '105vw', '115vw', '125vw'];

        /*For mobiles*/
        /*ctrl.marginValue = [-35, -15, 3, 13, 45, 65, 85, 105, 125];
         ctrl.margins = ['-35vw', '-15vw', '5vw', '17vw', '45vw', '79vw', '91vw', '105vw', '125vw'];*/

        ctrl.marginTopValue = [-20, 10, 45, 81, 110, 125];
        ctrl.marginsTop = ['-20vh', '11vh', '45vh', '81vh', '110vh', '125vh'];

        /*For Mobiles*/
        /*ctrl.marginTopValue = [-20, 10, 45, 81, 110, 125];
         ctrl.marginsTop = ['-20vh', '13vh', '45vh', '77vh', '110vh', '125vh'];*/

        ctrl.move = function(key){
            if(key.keyCode === 39){      //right
                resetAnimation();
                ctrl.show = 1;
                if(ctrl.horizontalMidDiv === 0){
                    ctrl.horizontalMidDiv = ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                }
                ctrl.horizontalMidDiv--;
                ctrl.divPosition++;
                console.log("div position" + ctrl.divPosition);
            }
            else if(key.keyCode === 37){  //left
                ctrl.show = 1;
                resetAnimation();
                ctrl.horizontalMidDiv = (ctrl.horizontalMidDiv+1) % ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                if(ctrl.divPosition === 0){
                    ctrl.divPosition = ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                }
                ctrl.divPosition--;
                console.log("div position" + ctrl.divPosition);
            }
            else if(key.keyCode === 38) {  //up
                resetAnimation();
                ctrl.divPosition = 0;
                if(ctrl.verticalDivPosition === 0){
                    ctrl.verticalDivPosition = ctrl.eventDetails.length;
                }
                ctrl.verticalDivPosition--;
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId+1) % ctrl.eventDetails.length;
                ctrl.horizontalMidDiv = Math.ceil(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                if(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length == 1){
                    ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                }
            }
            else if(key.keyCode === 40) {  //down
                resetAnimation();
                ctrl.divPosition = 0;
                ctrl.verticalDivPosition++;
                if(ctrl.centreDiv.genreId === 0){
                    ctrl.centreDiv.genreId = ctrl.eventDetails.length;
                }
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId-1) % ctrl.eventDetails.length;
                ctrl.horizontalMidDiv = Math.ceil(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                if(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length == 1){
                    ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
                }
            }
        };

        function resetAnimation() {
            var element = document.getElementById('bottomDiv');
            element.classList.remove("mainMidBottomDiv");
            void element.offsetWidth;
            element.classList.add("mainMidBottomDiv");
        }

        ctrl.change = function(code){
            var obj = {
                keyCode : code
            };
            ctrl.move(obj);
        };

        ctrl.setFocus = function(){
            $window.document.getElementById('navigation').focus();
        };

        ctrl.go = function(state){
            $state.go(state);
        };

        ctrl.changeDisplay = function(){
            console.log("change display");
        };

        ctrl.changeOverlay = function () {
            ctrl.showOverlay = false;
        };
        /*function hideCondition(direction){
         if(direction === 'left'){
         ctrl.hideCondition = "(ctrl.eventDetails[ctrl.centreDiv.genreId].marginValue[(ctrl.divPosition+$index+ctrl.eventDetails[ctrl.centreDiv.genreId].events.length) %ctrl.eventDetails[ctrl.centreDiv.genreId].events.length] == 105" +
         "&&ctrl.eventDetails[ctrl.centreDiv.genreId].marginValue[(ctrl.divPosition+1+$index+ctrl.eventDetails[ctrl.centreDiv.genreId].events.length) %ctrl.eventDetails[ctrl.centreDiv.genreId].events.length] == -15)";
         }
         else{
         ctrl.hideCondition = "(ctrl.eventDetails[ctrl.centreDiv.genreId].marginValue[(ctrl.divPosition+$index+ctrl.eventDetails[ctrl.centreDiv.genreId].events.length) %ctrl.eventDetails[ctrl.centreDiv.genreId].events.length] == -15" +
         "&&ctrl.eventDetails[ctrl.centreDiv.genreId].marginValue[(ctrl.divPosition-1+$index+ctrl.eventDetails[ctrl.centreDiv.genreId].events.length) %ctrl.eventDetails[ctrl.centreDiv.genreId].events.length] == 105)";
         }
         }*/

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });

    }

})();
