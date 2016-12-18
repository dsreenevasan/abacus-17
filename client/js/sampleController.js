;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('SampleController', SampleController);

    SampleController.$inject = ['$state', '$compile', '$scope', '$window'];

    function SampleController($state, $compile, $scope, $window){

        var ctrl = this;
        ctrl.divPosition = 0; //for horizontal div movement
        ctrl.verticalDivPosition = 0; //for vertical div movement
        ctrl.show = 1;

        /*Setting focus to the div to listen to arrow keys*/
        document.getElementById('bg').focus();

        /*Background color generation*/
        var rn = Math.floor((Math.random() * 150) + 60);
        var rs = Math.floor((Math.random() * 11) + 4);
        var t = new Trianglify({
            x_gradient: Trianglify.colorbrewer.Spectral[rs],
            noiseIntensity: 0,
            cellsize: rn
        });
        var pattern = t.generate(window.innerWidth, window.innerWidth+200);
        var element = document.getElementById('bg');
        element.setAttribute('style', 'background-image: '+pattern.dataUrl);


        /*Events Details in the form of JSON*/
        ctrl.eventDetails = [
            {genreId: 1, genre: "Technical Events", events:[
                { id: 1, name: "OSPC", description: "'A programmer is an organism that turns caffeine and pizza into code." +
                " Great coders are the rock stars of abaCUS. Indulge yourself in solving the perplexing problems, designed to defeat you." +
                " Prove yourself worthy of the exciting internships and prizes by battling against the exceptional coders across India. " +
                "Get geared up to compile and run.",
                rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions.",
                "Participants are not allowed to bring any additional material.", "Any kind of malpractice will lead to disqualification.", "Decisions made by the administrators will be final and binding."]},
                format: {rounds: ["A Written round consisting of questions based on Data Structures, Algorithms and Programming logic.", "The final round will be similar to ACM-ICPC."]},
                contact: "Adhitya - +91 8939222530",
                image: "../images/events/ospc.jpg"},
                { id: 2, name: "Debugging",
                    description: "'Testing proves a programmer's failure.Debugging is the porgrammer's vindication.' -Boris Beizer" +
                        "Debugging is twice as hard as writing the code in the first place." +
                        "Prove your skills in seeking the bugs, racing against time and your peers to be crowned the ultimate grand master of debugging.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["A written round consisting of simple debugging questions.", "You will be given the code which may or may not have logical/syntactic bugs.  You have to identify the errors and fix them."]},
                    contact: "Arjun - +91 7598306818",
                    image: "../images/events/debugging.jpg"},
                { id: 3, name: "Unlock the deadlock",
                    description: "Known as the freaky programmer or passionate coder?" +
                    "Is solving computational problem statements and pondering about future computing technology among your hobbies?" +
                    "Even if your technical knowledge does not match the ideal coding paradigm fear not comrade!" +
                    "Pragyan 2016 offers you a chance to attend its 2 day coding workshop followed by the GPU Coding contest.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Basic Questions on Database. (40 Questions)", "You will be given a schema and asked to build schema diagram ,queries, triggers, functions and procedures."]},
                    contact: "Jayabharathi - +91 7418527055, Monesha - +91 8940245749",
                    image: "../images/events/db.jpg"},
                { id: 4, name: "Game of Nerds",
                    description: "'Live as if you were to die tomorrow; Learn as if you were to live forever!'-Mahatma Gandhi" +
                    "To all the masters of technology! Unleash your mastery in the various fields of Computer Science" +
                    "and grab the techie-throne!" +
                    "Get ready to play the tech-fusion!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["This will be the preliminary round. Basic questions on Data Structures and Algorithms, Computer Architecture, Database Management Systems,Operating Systems,Web Technology, Theory of Computation and Networks will be put forth.",
                    "Will be revealed on-spot"]},
                    contact: "Pavitra - +91 9940699306",
                    image: "../images/events/gon.jpg"},
                { id: 5, name: "Re'Present'",
                    description: "'Success begins at the end of your comfort zone!'" +
                    "Pen your ideaology! Present and represent!" +
                    "Kill your fears and  exhibit your innovative thoughts!",
                    rules: {points: ["Send your abstract to <strong>paperpresentation@abacus.org</strong> in on or before March 1.",
                    "Each team can have a maximum of 3 members.", "If your paper gets selected,we will intimate through mail.",
                    "The selected teams should present their paper on March 12.", "The duration of presentation is 15 to 20 minutes."]},
                    format: {rounds: ["Lifi Technology", "Nano Computing", "Cyber crime and security", "Intrusion Detection system", "Blue eye technology",
                    "DNA computing", "Data interlinking - web services", "Data mining in Healthcare", "Challenges in the migration to 4G mobile system",
                    "Gait recognition - Image processing", "Human Computer Interaction"]},
                    contact: "Ramya V - +91 9629369543, Keerthana c - +91 7708113087",
                    image: "../images/events/math.jpg"},
                { id: 6, name: "Cyber Wars",
                    description: "'If you want to go fast, go alone!" +
                    "If you want to go far, go with others!'" +
                    "Are you a real tech savvy in the field of networking? If yes, then it is your realm now!" +
                    "Fight against the terrific war amidst your fellow-mates and show us your dexterity in the cyber world!" +
                    "Brace yourself for the deadly combat!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Will be updated soon"]},
                    contact: "Premkumar R - 7845660996",
                    image: "../images/events/net.jpg"},
                { id: 7, name: "Reverse Coding",
                    description: "'A programmer is an organism that turns caffeine and pizza into code.'" +
                "Great coders are the rock stars of abaCUS. Indulge yourself in solving the perplexing problems, designed to defeat you." +
                    "Prove yourself worthy of the exciting internships and prizes by battling against the exceptional coders across India" +
                    "Get geared up to compile and run.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Written round consisting of various reverse coding questions.", "Same format as Prelims. Coding has to be done on computer."]},
                    contact: "will be updated soon.",
                    image: "../images/events/paper.jpg"},
                { id: 8, name: "Webaholic",
                    description: "'Design is intelligence made visible'" +
                    "- Alina Wheeler," +
                    "To all the erudite web designers! Time to weave your artistry in the web world! Prove your knack in web designing and win jackpots!",
                    rules: {points: ["Each team can have a maximum of two members.", "The members of a team can be from different colleges/institutions.",
                    "Plagiarism to be strictly avoided and the team so found will be disqualified.", "Judges decision will be final."]},
                    format: {rounds: ["Questions from HTML,CSS, JAVASCRIPT, JQUERY, PHP. No of Questions : 40. Duration :30 mins", "Develop webpages using HTML,CSS,JS without any references.",
                    "Develop a website using these. 1.  Google Maps API. 2.  Use any database using any backend language. 3.  encoding / decoding"]},
                    contact: "Giritharan T - 8098380066, Sakthivel S  - 8760480028",
                    image: "../images/events/web.jpg"}],
            marginValue: [-35, -25, -15, 4, 45, 83, 105, 115], margins :['-35vw', '-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw', '115vw']},
            {genreId: 2, genre: "General", events: [
                {id: 1, name: "Math Maze",
                    image: "../images/events/math.jpg"},
                {id: 2, name: "Quiz Wiz",
                    image: "../images/events/quiz.jpg"},
                {id: 3, name: "Go Game",
                    image: "../images/events/gaming.jpg"},
                {id: 4, name: "Design Mania",
                    image: "../images/events/design.jpg"},
                {id: 5, name: "IPL Bidding",
                    image: "../images/events/ipl.jpg"},
                {id: 6, name: "Housefull",
                    image: "../images/events/android.jpg"}],
                marginValue: [-25, -15, 3, 45, 83, 105], margins :['-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw']},
            {genreId: 3, genre: "Night Events", events: [{id: 1, name: "Coding Hungama",
                image: "../images/events/ospc.jpg"}],
                marginValue: [45], margins :['45vw']},
            {genreId: 4, genre: "Online Events", events: [
                {id: 1, name: "OLPC",
                    image: "../images/events/ospc.jpg"},
                {id: 2, name: "Da Vinci Code",
                    image: "../images/events/dav.jpg"},
                {id: 3, name: "Online Photography",
                    image: "../images/events/ospc.jpg"},
                {id: 4, name: "Scribble Away",
                    image: "../images/events/paper.jpg"},
                {id: 5, name: "ROS",
                    image: "../images/events/ospc.jpg"}],
                marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']},
            {genreId: 5, genre: "Workshops", events: [
                {id: 1, name: "Data Mining",
                    image: "../images/workshop/mining.jpg"},
                {id: 2, name: "Internet Of Things",
                    image: "../images/workshop/iot.jpg"},
                {id: 3, name: "Ruby On Rails",
                    image: "../images/workshop/ruby.jpg"},
                {id: 4, name: "IBM bluemix and Dockers",
                    image: "../images/events/bluemix.jpg"},
                {id: 5, name: "Big Data",
                    image: "../images/events/ospc.jpg"}],
                marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']},
            {genreId: 6, genre: "Reach", events: [
                {id: 1, name: "Android App Development",
                    image: "../images/events/android.jpg"},
                {id: 2, name: "Advanced Web Development",
                    image: "../images/events/web.jpg"}],
                marginValue: [4, 45], margins :['4vw', '45vw']}
        ];

        /*To track the centre div*/
        ctrl.centreDiv = {
            genreId : 2,
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
                /*console.log("div position" + ctrl.divPosition);*/
            }
            else if(key.keyCode === 37){  //left
                ctrl.show = 1;
                resetAnimation();
                ctrl.horizontalMidDiv = (ctrl.horizontalMidDiv+1) % ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                if(ctrl.divPosition === 0){
                    ctrl.divPosition = ctrl.eventDetails[ctrl.centreDiv.genreId].events.length;
                }
                ctrl.divPosition--;

            }
            else if(key.keyCode === 38) {  //up
                resetAnimation();
                ctrl.divPosition = 0;
                if(ctrl.verticalDivPosition === 0){
                    ctrl.verticalDivPosition = ctrl.eventDetails.length;
                }
                ctrl.verticalDivPosition--;
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId+1) % ctrl.eventDetails.length;
                ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
            }
            else if(key.keyCode === 40) {  //down
                resetAnimation();
                ctrl.divPosition = 0;
                ctrl.verticalDivPosition++;
                if(ctrl.centreDiv.genreId === 0){
                    ctrl.centreDiv.genreId = ctrl.eventDetails.length;
                }
                ctrl.centreDiv.genreId = (ctrl.centreDiv.genreId-1) % ctrl.eventDetails.length;
                ctrl.horizontalMidDiv = Math.floor(ctrl.eventDetails[ctrl.centreDiv.genreId].events.length/2);
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

    }

})();
