;(function() {
    'use strict';

    angular
        .module('abacus')
        .controller('EventsAndWorkshopsController', EventsAndWorkshopsController);

    EventsAndWorkshopsController.$inject = ['$state', '$compile', '$scope', '$window'];

    function EventsAndWorkshopsController($state, $compile, $scope, $window){

        var ctrl = this;
        ctrl.divPosition = 0; //for horizontal div movement
        ctrl.verticalDivPosition = 0; //for vertical div movement
        ctrl.show = 1;

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
            {genreId: 1, genre: "Technical Events", events:[
                { id: 1, name: "OSPC", description: "'A programmer is an organism that turns caffeine and pizza into code." +
                " Great coders are the rock stars of abaCUS. Indulge yourself in solving the perplexing problems, designed to defeat you." +
                " Prove yourself worthy of the exciting internships and prizes by battling against the exceptional coders across India. " +
                "Get geared up to compile and run.",
                rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions.",
                "Participants are not allowed to bring any additional material.", "Any kind of malpractice will lead to disqualification.", "Decisions made by the administrators will be final and binding."]},
                format: {rounds: ["A Written round consisting of questions based on Data Structures, Algorithms and Programming logic.", "The final round will be similar to ACM-ICPC."]},
                contact: "Will be updated soon",
                image: "../images/events/tech/ospc.jpg"},
                { id: 2, name: "Debugging",
                    description: "'Testing proves a programmer's failure.Debugging is the porgrammer's vindication.' -Boris Beizer" +
                        "Debugging is twice as hard as writing the code in the first place." +
                        "Prove your skills in seeking the bugs, racing against time and your peers to be crowned the ultimate grand master of debugging.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["A written round consisting of simple debugging questions.", "You will be given the code which may or may not have logical/syntactic bugs.  You have to identify the errors and fix them."]},
                    contact: "Will be updated soon",
                    image: "../images/events/tech/debugging.jpg"},
                { id: 3, name: "Unlock the deadlock",
                    description: "Known as the freaky programmer or passionate coder?" +
                    "Is solving computational problem statements and pondering about future computing technology among your hobbies?" +
                    "Even if your technical knowledge does not match the ideal coding paradigm fear not comrade!" +
                    "Pragyan 2016 offers you a chance to attend its 2 day coding workshop followed by the GPU Coding contest.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Basic Questions on Database. (40 Questions)", "You will be given a schema and asked to build schema diagram ,queries, triggers, functions and procedures."]},
                    contact: "Jayabharathi - +91 7418527055, Monesha - +91 8940245749",
                    image: "../images/events/tech/db_mania.jpg"},
                { id: 4, name: "Game of Nerds",
                    description: "'Live as if you were to die tomorrow; Learn as if you were to live forever!'-Mahatma Gandhi" +
                    "To all the masters of technology! Unleash your mastery in the various fields of Computer Science" +
                    "and grab the techie-throne!" +
                    "Get ready to play the tech-fusion!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["This will be the preliminary round. Basic questions on Data Structures and Algorithms, Computer Architecture, Database Management Systems,Operating Systems,Web Technology, Theory of Computation and Networks will be put forth.",
                    "Will be revealed on-spot"]},
                    contact: "Will be updated soon",
                    image: "../images/events/tech/game_of_nerds.jpg"},
                /*{ id: 5, name: "Re'Present'",
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
                    image: "../images/events/math.jpg"},*/
                { id: 6, name: "Cyber Wars",
                    description: "'If you want to go fast, go alone!" +
                    "If you want to go far, go with others!'" +
                    "Are you a real tech savvy in the field of networking? If yes, then it is your realm now!" +
                    "Fight against the terrific war amidst your fellow-mates and show us your dexterity in the cyber world!" +
                    "Brace yourself for the deadly combat!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Will be updated soon"]},
                    contact: "Will be updated soon",
                    image: "../images/events/tech/cyber_wars.jpg"},
                { id: 7, name: "Reverse Coding",
                    description: "'A programmer is an organism that turns caffeine and pizza into code.'" +
                "Great coders are the rock stars of abaCUS. Indulge yourself in solving the perplexing problems, designed to defeat you." +
                    "Prove yourself worthy of the exciting internships and prizes by battling against the exceptional coders across India" +
                    "Get geared up to compile and run.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Written round consisting of various reverse coding questions.", "Same format as Prelims. Coding has to be done on computer."]},
                    contact: "will be updated soon.",
                    image: "../images/events/tech/reverse_coding.jpg"},
                { id: 8, name: "Webaholic",
                    description: "'Design is intelligence made visible'" +
                    "- Alina Wheeler," +
                    "To all the erudite web designers! Time to weave your artistry in the web world! Prove your knack in web designing and win jackpots!",
                    rules: {points: ["Each team can have a maximum of two members.", "The members of a team can be from different colleges/institutions.",
                    "Plagiarism to be strictly avoided and the team so found will be disqualified.", "Judges decision will be final."]},
                    format: {rounds: ["Questions from HTML,CSS, JAVASCRIPT, JQUERY, PHP. No of Questions : 40. Duration :30 mins", "Develop webpages using HTML,CSS,JS without any references.",
                    "Develop a website using these. 1.  Google Maps API. 2.  Use any database using any backend language. 3.  encoding / decoding"]},
                    contact: "will be updated soon.",
                    image: "../images/events/tech/ospc.jpg"}],
            marginValue: [-35, -25, -15, 4, 45, 83, 105, 115], margins :['-35vw', '-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw', '115vw']},
            {genreId: 2, genre: "General", events: [
                {id: 1, name: "Mathrix",
                    description: "What is more fun than a good play with numbers?"+
                    "Tease your brain and test your skills."+
                    "Come explore the world of mathematics via witty puzzles!"+
                    "Infinity is just the Beginning.",
                    rules: {points:["Each team can have a maximum of three members.",
                        "The members of a team can be from different colleges/institutions."]},
                    format: {rounds:["Consists of two rounds.(Round 1 and Finals).",
                    "Consists of three sections of varying difficulties.",
                        "Hard Questions carry higher scores than Medium and Easy Questions.",
                        "Some questions are starred and will be considered in the case of Tie-breakers. "]},
                    contact: "Will be updated soon",
                    image: "../images/events/general/mathrix.jpg"},
                /*{id: 2, name: "Quiz Wiz",
                    image: "../images/events/quiz.jpg"},
                {id: 3, name: "Go Game",
                    image: "../images/events/gaming.jpg"},*/
                {id: 4, name: "Selfie-hunt",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    image: "../images/events/general/selfie_hunt.jpg"},
                {id: 5, name: "IPL Bidding",
                    description: "Have you ever thought of building your own IPL team."+
                    "Are you a cricket enthusiast who dreamt having Dhoni as your captain,Watson as your opener with Devillers,Starc,Steyn in your team…???"+
                    "Then this is the right place to exhibit your cricketing passion with management capabilities. "+
                    "This March, grab the chance of building your very own IPL team with the money we offer you."+
                    "Be the next Shah rukh khan or Vijay Mallaya or Preity Zinta. The ball is in your court now.!!!",
                    rules: {points:["Two or Three members per team.",
                        "The competition will be conducted in two rounds.",
                        "Teams which do not adhere to the rules and regulations can be disqualified at any phase of the event.",
                        "In case of any dispute, the decision of the Organizing Committee will be final and binding"]},
                    format: {rounds:["First round consists of set of questions related to cricket to be answered.",
                        "The top 8 teams from the first round will get qualified to the final round",
                        "In the final round each team will be given a franchise name Each player will be auctioned separately and the teams has to bid for the players they like to buy."]},
                    contact: "Will be updated soon",
                    image: "../images/events/tech/cyber_wars.jpg"},
                {id: 6, name: "Housefull",
                    description: "All work and no play makes Jack a dull boy"+
                    "Bored of all the technical stuff? Looking for a fun filled event with your gang of friends?"+
                    "House full is an ideal place for you.The event is mainly focused on CINEMA,CRICKET and OTHER ENTERTAINING STUFF."+
                    "Grab some popcorn.Get ready for the fun ride!!!!!",
                    rules: {points:["Three members per team.",
                        "A Team can consist of members from any department or any college.",
                        "Teams which do not adhere to the rules and regulations can be disqualified at any phase of the event."]},
                    format: {rounds:["It is a written round.The questions will be based on all entertaining stuff.",
                        "You will experience the real fun in these rounds.The format of these rounds will be revealed on the spot !"]},
                    contact: "Will be updated soon",
                    image: "../images/events/general/house_full.jpg"}],
                /*marginValue: [-25, -15, 3, 45, 83, 105], margins :['-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [-15, 3, 45, 83], margins :[ '-15vw', '4vw', '45vw', '83vw']},
            {genreId: 3, genre: "Night Events", events:
                [{id: 1, /*name: "Coding Hungama",*/
                    name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                image: "../images/events/ospc.jpg"}],
                marginValue: [45], margins :['45vw']},
            {genreId: 4, genre: "Online Events", events: [
                {id: 1, name: "OLPC",
                    description:"'Talk is cheap. Show me the code' -Linus Torvalds" +
                "Do you love coding? Are you the master of your dancing fingers?" +
                    "Then show off your mastery in the terrific battle of online programming!"+" Happy coding, geeks!",
                    rules: {points: ["It is a typical ACM-ICPC style programming contest.","A valid aBaCUS id is must.",
                        "Any kind of malpractice will lead to disqualification."+"The contest link will be shared soon."]},
                    contact: "Will be updated soon",
                    image: "../images/events/online/olpc.jpg"},
                {id: 2, name: "Da Vinci Code",
                    description: "'Everyone on earth has a treasure that awaits him' -Paulo Coelho"+
                    "Waiting for your treasure? Squeeze your brain and explore the breath-taking online treasure hunt!"+
                    "The adventurous ride with mystifying riddles and mind-bending puzzles is set!"+
                    "All you have to do is, sit at your own place and google!"+
                    "Break the code and make your mark!",
                    rules: {points:["A valid aBaCUS id is must.","Any kind of malpractice will lead to disqualification.",
                        "The contest link will be shared soon"]},
                    format: {rounds:[" "]},
                    contact: "Will be updated soon",
                    image: "../images/events/online/davinci_code.jpg"},/*
                {id: 3, name: "Online Photography",
                    image: "../images/events/ospc.jpg"},
                {id: 4, name: "Scribble Away",
                    image: "../images/events/paper.jpg"},
                {id: 5, name: "ROS",
                    image: "../images/events/ospc.jpg"}],*/],
                /*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [4, 45], margins :['4vw', '45vw']},
            {genreId: 5, genre: "Workshops", events: [
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
                marginValue: [45], margins :['45vw']},
            {genreId: 6, genre: "Reach", events: [
                {id: 1, name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    /*image: "../images/events/android.jpg"*/
                    image: "../images/events/ospc.jpg"},
                /*{id: 2, name: "Advanced Web Development",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    /!*image: "../images/events/web.jpg"*!/
                    image: ""}*/],
                /*marginValue: [4, 45], margins :['4vw', '45vw']*/
                marginValue: [45], margins :['45vw']}
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

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
        });

    }

})();
