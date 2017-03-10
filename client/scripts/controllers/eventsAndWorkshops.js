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
        

        /*Events Details in the form of JSON*/
        ctrl.eventDetails = [
            {genreId: 1, genre: "Technical Events", events:[
                { id: 1, name: "Coffee with Java",
                    description: "Tired of pointers that make you go crazy ?<br>" +
                    "Are you an expert in cooking 'netbeans' ?<br>" +
                    "Are you a complete java package with essential knowledge imported in you ?<br>" +
                    "Do you believe in robust yet simple coding ?<br>" +
                    "Here's Coffee with java for you !<br>" +
                    "Take part in this exciting event to prove your expertise in the language and grab extraordinary prizes !!",
                    rules: {points: ["Will be updated soon"]},
                    format: {rounds: ["Will be updated soon"]},
                    contact: [
                        "Ramya - 9962256411",
                        "Ilanchelian - 9445171664"
                    ],
                    image: "../images/events/math.jpg"},
                { id: 2, name: "OSPC", description: "Are you a superclass from whom 'the whole class' inherits the code during the frenzied lab sessions ?<br>" +
                    "Are you the kind of person who turns coffee into codes ?<br>" +
                    "Here is the event you are seeking!<br>" +
                    "Abacus brings you OSPC (OnSite Programming Contest) to get your Code dumped onsite to win amazing prizes.",
                rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions.",
                "Participants are not allowed to bring any additional material.", "Any kind of malpractice will lead to disqualification.", "Decisions made by the administrators will be final and binding."]},
                format: {rounds: ["A Written round consisting of questions based on Data Structures, Algorithms and Programming logic.", "The final round will be similar to ACM-ICPC."]},
                contact: [
                "Suresh - 9444136901",
                    "Muthu Nagappan - 9445811755",
                    "Vishvesh Thangamani - 9195693399" ,
                    "Tamilvendan - 7299802300"],
                image: "../images/events/tech/ospc.jpg"},
                { id: 3, name: "Debugging",
                    description: "'To err is to be human' goes the saying.'<br><br>" +
                    "Sadly, computers don't seem to agree with the divinity in the imperfections of nature." +
                "That's why it demands all it's code to be bug free and up and running." +
                    "To all those perfectionists out there, come and take part in the Debugging contest where you get to find and fix bugs and unravel interesting results to complete the intriguing game of coding.",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["A written round consisting of simple debugging questions.", "You will be given the code which may or may not have logical/syntactic bugs.  You have to identify the errors and fix them."]},
                    contact: [
                        "Arjundhanraj - 7598306818",
                        "Sakthiprasath - 8110010630",
                        "Sultan - 8807777901"
                    ],
                    image: "../images/events/tech/debugging.jpg"},
                { id: 4, name: "DBmania",
                    description: "You think you can wade through piles and piles of copious amounts of data without getting lost?<br>" +
                    "Are your magic spells powerful enough to do whatever is needed to get those data dancing to your tunes?<br>" +
                    "If you believe you are one daring data-wizard, then come and take part in  DB Mania where queries rule your thoughts more than anything else!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Basic Questions on Database. (40 Questions)", "You will be given a schema and asked to build schema diagram ,queries, triggers, functions and procedures."]},
                    contact: [
                        "Arun - 8124267121",
                        "Gowrishankar - 8903462709",
                        "MuthuThillai - 9655883077"
                    ],
                    image: "../images/events/tech/db_mania.jpg"},
                { id: 5, name: "Game of Nerds",
                    description: "'When you play the game of nerds,you win or you learn'<br>" +
                    "You think you are able to master all the trades of CS ?<br>" +
                    "Are you that geeky person in every class to whom people flock to get their doubts clarified ?<br>You think you can battle it out with fellow nerds to prove your claim to the throne of nerds ?<br>" +
                    "Game of nerds presents you a platform to prove your excellence in the fundamentals of Computer engineering . Sharpen your brains to meet the best of nerds !",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["This will be the preliminary round. Basic questions on Data Structures and Algorithms, Computer Architecture, Database Management Systems,Operating Systems,Web Technology, Theory of Computation and Networks will be put forth.",
                    "Will be revealed on-spot"]},
                    contact: [
                        "Gokila - 9841183871",
                        "Arun - 8012364643",
                        "Poonkuzhali - 9003273214",
                        "Monika - 9791228184",
                        "Thiru - 9486752704",
                        "Sivagami - 7092935004",
                        "Priyadharshini - 9962327699"
                    ],
                    image: "../images/events/tech/game_of_nerds.jpg"},
                { id: 6, name: "Cyber Wars",
                    description: "Dare to  venture a warzone filled with networking freaks ?<br>" +
                    "Are you capable of peeling off every layer of network with your expertise ?<br>You consider yourself to be an intimidating hacker who poses a threat to cyber criminals ?<br>" +
                    "Here is one thriving opportunity to showcase your networking talents.Be a part of Cyberwars to tickle your brains and take home wonderful prizes !",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Will be updated soon"]},
                    contact: [
                        "Radhika - 9962720188",
                        "Manimegalai - 8939321066",
                        "Rekha - 9094553868",
                        "Nandhini - 9444833190",
                        "Abirami - 9940220259",
                        "Pavithra - 8870603612",
                        "Ajay - 8883339409"
                    ],
                    image: "../images/events/tech/cyber_wars.jpg"},
                { id: 7, name: "Reverse Coding",
                    description: "Sick of figuring out the results you are supposed to anticipate when you are stuck with complicated code ( which might look a lot like Greek and Latin ) ?<br>" +
                    "Thought of a million other easier ways you could derive a result with cleaner code?<br>" +
                    "Be your own code sculpture in 'Reverse coding' where you get to write code to make sure you get the output that you'd be promptly given!",
                    rules: {points: ["Each team can have a maximum of three members.", "The members of a team can be from different colleges/institutions."]},
                    format: {rounds: ["Written round consisting of various reverse coding questions.", "Same format as Prelims. Coding has to be done on computer."]},
                    contact: [
                        "Manojkumar - 9597250572",
                    "Harini - 9444850785",
                    "Sruthi - 9944263196",
                    "Makisha - 9629078175"
                    ],
                    image: "../images/events/tech/reverse_coding.jpg"},
                { id: 8, name: "Webaholic",
                    description: "Bored of typing pages and pages of codes ?Wanna try something creative that attracts everyone's attention ?<br>" +
                    "This event is exclusively for those who could bring incredibly creative web designs into reality with their magical h(w)ands. Try out your luck in designing marvellous web stuff with html,javascript and css to win exciting rewards.",
                    rules: {points: ["Each team can have a maximum of two members.", "The members of a team can be from different colleges/institutions.",
                    "Plagiarism to be strictly avoided and the team so found will be disqualified.", "Judges decision will be final."]},
                    format: {rounds: ["Questions from HTML,CSS, JAVASCRIPT, JQUERY, PHP. No of Questions : 40. Duration :30 mins", "Develop webpages using HTML,CSS,JS without any references.",
                    "Develop a website using these. 1.  Google Maps API. 2.  Use any database using any backend language. 3.  encoding / decoding"]},
                    contact: [
                        "Vagul - 9789117799",
                        "Durai Sreenevasan- 9894543958"
                    ],
                    image: "../images/events/tech/ospc.jpg"}],
            marginValue: [-35, -25, -15, 4, 45, 83, 105, 115], margins :['-35vw', '-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw', '115vw']},
            {genreId: 2, genre: "General", events: [
                {id: 1, name: "math.h",
                    description: "What is more fun than a good play with numbers?<br>"+
                    "Tease your brain and test your skills.<br>"+
                    "Come explore the world of mathematics via witty puzzles!<br>"+
                    "Infinity is just the Beginning.",
                    rules: {points:["Each team can have a maximum of three members.",
                        "The members of a team can be from different colleges/institutions."]},
                    format: {rounds:["Consists of two rounds.(Round 1 and Finals).",
                    "Consists of three sections of varying difficulties.",
                        "Hard Questions carry higher scores than Medium and Easy Questions.",
                        "Some questions are starred and will be considered in the case of Tie-breakers. "]},
                    contact: ["Arul Jothi - 8012264903"],
                    image: "../images/events/general/mathrix.jpg"},
                /*{id: 2, name: "Quiz Wiz",
                    image: "../images/events/quiz.jpg"},
                {id: 3, name: "Go Game",
                    image: "../images/events/gaming.jpg"},*/
                {id: 4, name: "Finding Nemo",
                    description: "Calling all 007’s, Sherlocks and Langdons! Do you have what it takes to decipher some of the hardest enigmas and explore unchartered territories? Like Marlin and Dory, can you connect the dots and locate Nemo? If you think you can crack and track your way out of this labyrinth, then this is your arena!",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: ["Keerthana - 9042389902"],
                    image: "../images/events/general/selfie_hunt.jpg"},
                {id: 5, name: "IPL Bidding",
                    description: "Chance to pick top players at a price of your choice. Come and taste the actual recipe of an IPL Auction, where an auctioneer will roll out all the players to be selected by the franchises to make a strong team. Come in and find how well you can manage money matters and how strong your team can be picked!",
                    rules: {points:["Two or Three members per team.",
                        "The competition will be conducted in two rounds.",
                        "Teams which do not adhere to the rules and regulations can be disqualified at any phase of the event.",
                        "In case of any dispute, the decision of the Organizing Committee will be final and binding"]},
                    format: {rounds:["First round consists of set of questions related to cricket to be answered.",
                        "The top 8 teams from the first round will get qualified to the final round",
                        "In the final round each team will be given a franchise name Each player will be auctioned separately and the teams has to bid for the players they like to buy."]},
                    contact: ["Prasanna - 9003222748"],
                    image: "../images/events/tech/cyber_wars.jpg"},
                {id: 6, name: "Housefull",
                    description: "All work and no play makes Jack a dull boy.<br>" +
                    "Bored of all the technical stuff? Looking for a fun filled event with your gang of friends?<br>"+
                    "House full is an ideal place for you.The event is mainly focused on CINEMA,CRICKET and OTHER ENTERTAINING STUFF.<br>"+
                    "Grab some popcorn.Get ready for the fun ride!!!!!",
                    rules: {points:["Three members per team.",
                        "A Team can consist of members from any department or any college.",
                        "Teams which do not adhere to the rules and regulations can be disqualified at any phase of the event."]},
                    format: {rounds:["It is a written round.The questions will be based on all entertaining stuff.",
                        "You will experience the real fun in these rounds.The format of these rounds will be revealed on the spot !"]},
                    contact: ["Manikandan - 8675785416"],
                    image: "../images/events/general/house_full.jpg"}],
                /*marginValue: [-25, -15, 3, 45, 83, 105], margins :['-25vw', '-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [-15, 3, 45, 83], margins :[ '-15vw', '4vw', '45vw', '83vw']},
            {genreId: 3, genre: "Night Events", events:
                [{id: 1,
                    name: "Hackathon",
                    description: "If coffee, sleepless nights and the illuminated screen of your computer define your everyday routine, then this hackathon is for you. Team up with your friends and try your hand at coming up with cool apps, robots, games etc all in one night. Think you're up for the challenge? ",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: ["Renga Bashyam 	7598010654",
                        "Bharath Bhargav	9787975416",
                        "Sankara Narayanan   9488119314"],
                image: "../images/events/ospc.jpg"}],
                marginValue: [45], margins :['45vw']},
            {genreId: 4, genre: "Online Events", events: [
                {id: 1, name: "OLPC",
                    description:"Is programming your weapon of choice in a heated room full of technocrats? If yes, then you're also probably lazy if you're here reading about the aBaCuS Online Programming Contest. But don't let that hinder you from showing off your coding skills to your opponents! Enjoy the comforts of home while making your way to being hailed as the ultimate coding ninja! ",
                    rules: {points: ["It is a typical ACM-ICPC style programming contest.","A valid aBaCUS id is must.",
                        "Any kind of malpractice will lead to disqualification."+"The contest link will be shared soon."]},
                    contact: ["Renga Bashyam - 7598010654",
                        "Bharath Bhargav - 9787975416",
                        "Sankara Narayanan - 9488119314"],
                    image: "../images/events/online/olpc.jpg"},
                {id: 2, name: "The Beautiful Mind",
                    description: "This event consists of tricky questions and you have the answer them, simple as that. But here's comes the crux: You'll need to write code to find the answer, such are the questions. Lengthy calculations and complex answers are things humans little patience with. After all, that's what computers were made for, weren't they?",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:[" "]},
                    contact: ["Renga Bashyam - 7598010654",
                        "Bharath Bhargav - 9787975416",
                        "Sankara Narayanan - 9488119314"],
                    image: "../images/events/online/davinci_code.jpg"},
                {id: 3, name: "Da Vinci Code",
                    description: "Clues, links and puzzles excite you more than anything else. Join the online treasure hunt event by aBaCUs and prove your dexterity and persistence. With the little information you're given, only your intellect and wisdom will help you solve the DaVinci Code.",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:[" "]},
                    contact: ["Raj Madhan - 9789231286"],
                    image: "../images/events/online/davinci_code.jpg"}/*
                {id: 3, name: "Online Photography",
                    image: "../images/events/ospc.jpg"},
                {id: 4, name: "Scribble Away",
                    image: "../images/events/paper.jpg"},
                {id: 5, name: "ROS",
                    image: "../images/events/ospc.jpg"}],*/],
                /*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*/
                marginValue: [4, 45, 83], margins :['4vw', '45vw', '83vw']}/*,
            {genreId: 5, genre: "Workshops", events: [
                {id: 1, name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    image: "../images/events/ospc.jpg"},
                /!*{id: 1, name: "Data Mining",
                    image: "../images/workshop/mining.jpg"},
                {id: 2, name: "Internet Of Things",
                    image: "../images/workshop/iot.jpg"},
                {id: 3, name: "Ruby On Rails",
                    image: "../images/workshop/ruby.jpg"},
                {id: 4, name: "IBM bluemix and Dockers",
                    image: "../images/events/bluemix.jpg"},
                {id: 5, name: "Big Data",
                    image: "../images/events/ospc.jpg"}*!/],
                /!*marginValue: [-15, 4, 45, 83, 105], margins :['-15vw', '4vw', '45vw', '83vw', '105vw']*!/
                marginValue: [45], margins :['45vw']},
            {genreId: 6, genre: "Reach", events: [
                {id: 1, name: "",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    /!*image: "../images/events/android.jpg"*!/
                    image: "../images/events/ospc.jpg"},
                /!*{id: 2, name: "Advanced Web Development",
                    description: "Will be updated soon",
                    rules: {points:["Will be updated soon"]},
                    format: {rounds:["Will be updated soon"]},
                    contact: "Will be updated soon",
                    /!*image: "../images/events/web.jpg"*!/
                    image: ""}*!/],
                /!*marginValue: [4, 45], margins :['4vw', '45vw']*!/
                marginValue: [45], margins :['45vw']}*/
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
            console.log("Swipe");
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

        ctrl.check = function () {
            console.log("ppp");
        };

        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            $("#events_rules").click(function(){
                console.log("cliked");
            });
        });

    }

})();
