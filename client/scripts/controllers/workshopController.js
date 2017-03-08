;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('WorkshopsController', WorkshopsController);

    WorkshopsController.$inject = ['$state', '$compile', '$scope', '$rootScope', '$window', '$uibModal', 'MainService', 'toaster', '$uibModalStack', '$cookieStore', '$timeout'];
    function WorkshopsController($state, $compile, $scope, $rootScope, $window, $uibModal, MainService, toaster, $uibModalStack, $cookieStore, $timeout){

        var ctrl = this;
        ctrl.divPosition = 0; //for horizontal div movement
        ctrl.verticalDivPosition = 0; //for vertical div movement
        ctrl.show = 1;
        ctrl.isMobile = false;
        ctrl.showOverlay = true;
        ctrl.loggedIn = false;
        detectmob();
        checkCookies();

        function checkCookies() {
            if($cookieStore.get('userDetails')){
                console.log("logged in");
                ctrl.userDetails = $cookieStore.get('userDetails');
                ctrl.loggedIn = true;
                /*ctrl.workshop_a_id = ctrl.userDetails.a_id;
                ctrl.workshop_emailId = ctrl.userDetails.mail;
                ctrl.workshop_workshop = 1;*/
            }
            else{
                console.log("not logged in");
            }
        }

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

        /*Events Details in the form of JSON*/
        ctrl.eventDetails = [
            {genreId: 1, genre: "Workshops", events: [
                {id: 1, name: "HOW TO DO WEB DEVELOPMENT WITH REACT [FRONT END FRAMEWORK]",
                    description: "“Websites should look good from the inside and out. ― Paul Cookson" +
                        "How many times you check out the website of any entity before judging it? Quite obviously the front runners for any business, websites are quintessential. Developing such a superpower requires smart skills and creative thinking. The workshop agenda is to transform anyone with absolute zero knowledge on the domain to be a creator of a unique design. REACT helps you to create an efficient UI, and the workshop, will help to create an efficient Web Developer. ",
                    contact: "Will be updated soon",
                    image: "../images/workshop/3.jpg"},
                 {id: 2, name: "HOW TO BUILD YOUR OWN FITBIT [FITNESS TRACKER]",
                     description: "“The best project you’ll ever work on is YOU -Ella Wright" +
                        "Fitness is what makes a human healthy. You eat, you exercise, you play and you strive hard to keep yourself fit. With the right fitness tracker, you can monitor how fit you are and what you have to do to reach your goals, from shedding the extra kilos to developing a sculpted body. Develop your own personalized FITBIT to become your own trainer who would never let you down. ",
                     image: "../images/workshop/6.jpg"},
                {id: 3, name: "HOW TO BUILD YOUR OWN AMAZON.COM [ECOMMERCE DEVELOPMENT]",
                    description: "“If you make a customer unhappy, they won’t tell five friends, they’ll tell 5,000 friends. So we are at a point now where we have all of the things we need to build an important and lasting company, and if we don’t, it will be shame on us. -	Jeff Bezos, CEO Amazon" +
                    "Gone are the days when people go shopping and bring back bags of goods. With one click, you find the world’s best deals and options to choose from. The e-commerce industry is a force that no one can ignore. Come and learn about building an e-commerce site to transform yourself to an entrepreneur altogether!",
                 image: "../images/workshop/1.jpg"},
                 {id: 4, name: "HOW TO ENHANCE THE REAL WORLD: AUGMENTED REALITY WORKSHOP",
                     description: "“Why shouldn’t people be able to teleport wherever they want? -Palmer Lucky, Founder of Oculus VR" +
                     "It’s quite sad we all missed our letters from Hogwarts. True that it does not exist, we still want   a magical world where we shape things, dream with our eyes wide open. Alternate realities exist when you are skilled enough to build your own versions, from flying dragons and unicorns to a whole new planet with ultra-cool gadgets and gizmos. Become the creator by learning the fundamentals of Augmented Reality!",
                 image: "../images/workshop/5.jpg"},
                 {id: 5, name: " LINUX",
                     description: "“Linux is user friendly. It’s just picky about who its friends are!" +
                     "It’s free, it’s open source, it’s secure and let’s just be honest, it’s cool! Probably the best thing about Linux is the Linux community. You will never feel alone in Linux world. Join with the rest of the geeks squad to become proficient in Linux.",
                 image: "../images/workshop/4.jpg"},
                {id: 6, name: " MACHINE LEARNING",
                    description: "“Computers used to not be able to see very well, and now they’re starting to open their eyes –Jeff Dean, Senior Fellow, Google" +
                        "The self-driving Google car, cyber fraud detection, friend recommendations on Facebook, movie recommendations on Netflix, recommendations from Amazon web search results, real-time ads on web pages and mobile devices, email spam filtering, pattern and image recognition – are all by-products of applying machine learning in the analysis of huge volumes of data. In short, ML is simply making computers behave like they do in the movies  As the hottest model in the technology industry and an upcoming revolutionary altogether, knowledge about Machine learning is nothing less than a basic need for all computer nerds. Come and learn, and we sure won’t let you down!",
                    image: "../images/workshop/2.jpg"}],
                /*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [-25, -15, 4, 45, 83, 105], margins :['-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw' ]},
        ];

        if($rootScope.workshop){
            ctrl.selectedWorkshop = ctrl.eventDetails[0].events[$rootScope.workshop].name;
        }

        /*To track the centre div*/
        ctrl.centreDiv = {
            genreId : 0,
            eventId : 1
        };
        ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);

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

        ctrl.ok = function () {

            console.log(ctrl.userDetails);
            
            if(ctrl.loggedIn){
                var obj = {
                    a_id : ctrl.userDetails.a_id,
                    emailId : ctrl.userDetails.mail,
                    workshop: $rootScope.workshop+1
                };

                /*console.log(JSON.stringify(obj));*/
                ctrl.workshop_a_id = ctrl.userDetails.a_id;
                ctrl.workshop_emailId = ctrl.userDetails.mail;
                ctrl.workshop_workshop = $rootScope.workshop+1;

                console.log("a_id - " + ctrl.workshop_a_id + " - email - " + ctrl.workshop_emailId + " - workshop - " + ctrl.workshop_workshop);
               /* MainService.RegisterWorkshop(obj).then(function(response){
                    if(response.status == 200){
                        if(response.data != 404){
                            toaster.pop("success", "Success", "Registration Successful", 3000);
                        }
                        else{
                            toaster.pop("error", "Error", "Error Registering", 3000);
                        }
                    }
                    else{
                        toaster.pop("error", "Error", "Error Registering", 3000);
                    }
                });*/

               /* angular.element('#workshop_reg_button').triggerHandler('click');*/
                $timeout(function() {
                    $(document).ready(function(){
                        $('#workshop_a_id').val(ctrl.workshop_a_id);
                        $('#workshop_emailId').val(ctrl.workshop_emailId);
                        $('#workshop_workshop').val(ctrl.workshop_workshop);
                    });
                    angular.element('#workshop_reg_button').trigger('click');
                }, 0);
                /*$(document).ready(function(){
                    $("#workshop_reg_button").click(function(){
                        console.log("cliked");
                    });
                });*/
            }
            else{
                console.log($rootScope.workshop);
                toaster.pop("info", "", "Login to continue", 2000);
                setTimeout(function () {
                    //$state.go('main');
                    var modalInstance = $uibModal.open({
                        templateUrl: '../views/login.html',
                        backdrop: true,
                        size: 'sm',
                        windowTopClass: 'modal-margin',
                        resolve: {

                        }
                    });
                    modalInstance.result.then(function (selectedItem) {


                    }, function () {

                    });
                }, 2000);
            }
            $uibModalStack.dismissAll();
        };

        ctrl.cancel = function () {
            $uibModalStack.dismissAll();
        };

        ctrl.registerWorkshop = function() {
            $rootScope.workshop = ctrl.horizontalMidDiv;
            var modalInstance = $uibModal.open({
                templateUrl: '../views/workshopRegisterModal.html',
                backdrop: true,
                size: 'md',
                windowTopClass: 'modal-margin',
                controller: 'WorkshopsController',
                controllerAs: 'ctrl',
                resolve: {

                }
            });
            modalInstance.result.then(function () {
                // Remove it on closing
                console.log("result");

            }, function () {
                // Remove it on dismissal
                console.log("result1");
            });
        };

        ctrl.sample = function(){
            console.log("clicked");
        };

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });

    }

})();
