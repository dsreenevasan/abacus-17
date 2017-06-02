;(function() {
  'use strict';

  angular
    .module('abacus')
    .controller('MainController', MainController);

  MainController.$inject = ['$state', '$http', '$scope', '$window', 'toaster' ,'$uibModal','$document', 'MainService', '$cookieStore', '$uibModalStack', 'webNotification'];
  function MainController($state, $http, $scope, $window, toaster, $uibModal,$document, MainService, $cookieStore, $uibModalStack, webNotification ){


    var ctrl = this;
    var bodyRef = angular.element( $document[0].body );
    console.log("Success!");
    ctrl.showNav = false;
    ctrl.maxWidth = 0;
    ctrl.loggedIn = false;
    ctrl.phoneNumberNotValid = false;
    ctrl.passwordInvalid = false;
    ctrl.isSubmitting = false;
    ctrl.right = false;
    ctrl.publicKey = "6LetiBcUAAAAAHEsMJERL8lZNkryc0EfYbhK8XVR";
    detect();
    checkCookies();
    /*notification('Abacus17 schedule', 'Click to open the schedule', 'https://drive.google.com/file/d/0B16nUyywUnKPMEtiXzVVRXVoUUk/view');*/
    /*routes();*/
    schedule();
    init();

    function init() {
      ctrl.departments = [
        "Aeronautical Engineering","Aerospace Engineering","Agricultural & Irrigation Engineering","Aircraft Maintenance Engineering","Animation","Apparel technology","Applied electronics","Applied Mathematics","Architecture","Automobile Engineering","Avionics","Bio Informatics","Bio Medical Engineering","Biotechnology","Ceramic Technology","Charted Accountancy","Chemical Engineering","Chemistry","Civil Engineering","Communication Systems","Computer Science & Engineering","Cryogenic Engineering","Elecrical Engineering","Electrical & Electronics Engineering","Electronic media","Electronics & Communication Engineering","Electronics & Instrumentation","Embedded Systems","Energy Engineering","Engineering Design","Engineering Physics","English Literature","Finance","Fluid Mechanics","Food Technology","Geo Informatics","Harbour Engineering ","High Voltage Engineering","Hospitality Administration","HR","Humanities & Social Sciences","Industrial Engineering","Information & Communications Technology","Information Technology","Internal Combustion Engineering","Logistics","M.Sc. CS-IT","M.Sc. E-Media","Manufacturing Engineering","Marine Engineering","Marketing","Material Science ","Mathematics","Mechanical Engineering","Mechatronics","Media Sciences","Metallurgy","Mining Engineering","Nano Science and Technology","Other","Photonics ","Physics","Printing Technology","Production Engineering","Remote Sensing","Software Engineering","Systems Engineering & Operations Research","Technology Managment","Telecommunication Engineering","Textile Technology","Theoretical Computer Science","Thermal","Transportation Engineering","VLSI Design","Other"
      ];

      /*MainService.GetColleges().then(function (response) {
        if(response.status == 200){
          ctrl.colleges = response.data.colleges;
        }
        else{
          toaster.pop("error", "Error", "Error loading college list", 3000);
        }
      });*/
      ctrl.colleges = [
        "A V S ENGINEERING COLLEGE",
        "A.C.COLLEGE OF ENGINEERING AND TECHNOLOGY (AUTONOMOUS)",
        "A.C.T. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "A.K.T. MEMORIAL COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "A.R. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "A.R. ENGINEERING COLLEGE",
        "A.R.J COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "A.S.L. PAULS COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "A.V.C COLLEGE OF ENGINEERING",
        "AAA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "AALIM MUHAMMED SALEGH COLLEGE OF ENGINEERING",
        "ADHI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ADHIPARASAKTHI COLLEGE OF ENGINEERING",
        "ADHIPARASAKTHI ENGINEERING COLLEGE",
        "ADHIYAMAAN COLLEGE OF ENGINEERING (AUTONOMOUS)",
        "ADITHYA INSTITUTE OF TECHNOLOGY",
        "AGNI COLLEGE OF TECHNOLOGY",
        "AISHWARYA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "AKSHAYA COLLEGE OF ENGINEERING & TECHNOLOGY",
        "AKSHEYAA COLLEGE OF ENGINEERING",
        "AL-AMEEN ENGINEERING COLLEGE",
        "ALPHA COLLEGE OF ENGINEERING",
        "Amrita school of Engineering",
        "ANAND INSTITUTE OF HIGHER TECHNOLOGY",
        "ANGEL COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ANJALAI AMMAL MAHALINGAM ENGINEERING COLLEGE",
        "ANNA UNIVERSITY, CHENNAI - ACT CAMPUS",
        "ANNA UNIVERSITY, CHENNAI - CEG CAMPUS",
        "ANNA UNIVERSITY, CHENNAI - MIT CAMPUS",
        "ANNAI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ANNAI MATHAMMAL SHEELA ENGINEERING COLLEGE",
        "ANNAI MIRA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ANNAI TERESA COLLEGE OF ENGINEERING",
        "ANNAI VAILANKANNI COLLEGE OF ENGINEERING",
        "ANNAI VEILANKANNI'S COLLEGE OF ENGINEERING",
        "ANNAMALAIAR COLLEGE OF ENGINEERING",
        "ANNAPOORANA ENGINEERING COLLEGE",
        "APOLLO ENGINEERING COLLEGE",
        "APOLLO PRIYADARSHANAM INSTITUTE OF TECHNOLOGY",
        "ARASU ENGINEERING COLLEGE",
        "ARCHANA INSTITUTE OF TECHNOLOGY",
        "ARIGNAR ANNA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "ARINGER ANNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ARIYALUR ENGINEERING COLLEGE",
        "ARJUN COLLEGE OF TECHNOLOGY",
        "ARM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ARS COLLEGE OF ENGINEERING",
        "ARULMIGU MEENAKSHI AMMAN COLLEGE OF ENGINEERING",
        "ARULMURUGAN COLLEGE OF ENGINEERING",
        "ARUNACHALA COLLEGE OF ENGINEERING FOR WOMEN",
        "ARUNAI COLLEGE OF ENGINEERING",
        "ARUNAI ENGINEERING COLLEGE",
        "ASAN MEMORIAL COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ASIAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "AS-SALAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "AVS COLLEGE OF TECHNOLOGY",
        "BALAJI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "BANNARI AMMAN INSTITUTE OF TECHNOLOGY (AUTONOMOUS)",
        "BETHLAHEM INSTITUTE OF ENGINEERING",
        "BHAJARANG ENGINEERING COLLEGE",
        "BHARATH NIKETAN ENGINEERING COLLEGE",
        "BHARATHIDASAN ENGINEERING COLLEGE",
        "BHARATHIYAR INSTITUTE OF ENGINEERING FOR WOMEN",
        "C M S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "C.A.R.E. GROUP OF INSTITUTIONS",
        "C.ABDUL HAKEEM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "C.K. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "C.R. ENGINEERING COLLEGE",
        "C.S.I. INSTITUTE OF TECHNOLOGY",
        "CAPE INSTITUTE OF TECHNOLOGY",
        "CAUVERY COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "CENTRAL ELECTROCHEMICAL RESEARCH INSTITUTE (CSIR) KARAIKUDI",
        "CENTRAL INSTITUTE OF PLASTICS ENGINEERING AND TECHNOLOGY",
        "CHANDY COLLEGE OF ENGINEERING",
        "CHENDHURAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "CHENDU COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "CHENNAI INSTITUTE OF TECHNOLOGY",
        "CHERAN COLLEGE OF ENGINEERING",
        "CHETTINAD COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "CHRIST THE KING ENGINEERING COLLEGE",
        "CHRISTIAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "CMS COLLEGE OF ENGINEERING",
        "COIMBATORE INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "COIMBATORE INSTITUTE OF TECHNOLOGY (AUTONOMOUS)",
        "CSI COLLEGE OF ENGINEERING",
        "D M I COLLEGE OF ENGINEERING",
        "DHAANISH AHMED COLLEGE OF ENGINEERING",
        "DHAANISH AHMED INSTITUTE OF TECHNOLOGY",
        "DHANALAKSHMI COLLEGE OF ENGINEERING",
        "DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING",
        "DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING",
        "DHANALAKSHMI SRINIVASAN ENGINEERING COLLEGE",
        "DHANALAKSHMI SRINIVASAN INSTITUTE OF RESEARCH AND TECHNOLOGY",
        "DHANALAKSHMI SRINIVASAN INSTITUTE OF TECHNOLOGY",
        "DHAYA COLLEGE OF ENGINEERING",
        "DHIRAJLAL GANDHI COLLEGE OF TECHNOLOGY",
        "DMI ENGINEERING COLLEGE",
        "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
        "DR. MAHALINGAM COLLEGE OF ENGINEERING & TECHNOLOGY (AUTONOMOUS)",
        "DR. PAULS ENGINEERING COLLEGE",
        "DR.G.U.POPE COLLEGE OF ENGINEERING",
        "DR.N G P INSTITUTE OF TECHNOLOGY",
        "DR.NALLINI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "DR.NAVALAR NEDUNCHEZHIYAN COLLEGE OF ENGINEERING",
        "DR.SIVANTHI ADITANAR COLLEGE OF ENGINEERING",
        "E.G.S.PILLAY ENGINEERING COLLEGE",
        "E.S ENGINEERING COLLEGE",
        "EASA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "EASWARI ENGINEERING COLLEGE",
        "EINSTEIN COLLEGE OF ENGINEERING",
        "ELIZABETH COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ER.PERUMAL MANIMEKALAI COLLEGE OF ENGINEERING",
        "ERODE BUILDER EDUCATIONAL TRUST'S GROUP OF INSTITUTIONS",
        "ERODE SENGUNTHAR ENGINEERING COLLEGE",
        "EXCEL COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "EXCEL COLLEGE OF TECHNOLOGY",
        "EXCEL ENGINEERING COLLEGE",
        "FATIMA MICHAEL COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "FRANCIS XAVIER ENGINEERING COLLEGE",
        "G.G.R. COLLEGE OF ENGINEERING",
        "G.K.M. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "GANADIPATHY TULSI'S JAIN ENGINEERING COLLEGE",
        "GANAPATHY CHETTIAR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "GANESH COLLEGE OF ENGINEERING",
        "GLOBAL INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "GNANAMANI COLLEGE OF TECHNOLOGY",
        "GOJAN SCHOOL OF BUSINESS AND TECHNOLOGY",
        "GOPAL RAMALINGAM MEMORIAL ENGINEERING COLLEGE",
        "GOVERNMENT COLLEGE OF ENGINEERING - BARGUR",
        "GOVERNMENT COLLEGE OF ENGINEERING - DHARMAPURI",
        "GOVERNMENT COLLEGE OF ENGINEERING - SALEM (AUTONOMOUS)",
        "GOVERNMENT COLLEGE OF ENGINEERING - SRIRANGAM",
        "GOVERNMENT COLLEGE OF ENGINEERING - THANJAVUR",
        "GOVERNMENT COLLEGE OF ENGINEERING - TIRUNELVELI",
        "GOVERNMENT COLLEGE OF ENGINEERING, BODIYANAYAKKANUR",
        "GOVERNMENT COLLEGE OF TECHNOLOGY, COIMBATORE (AUTONOMOUS)",
        "GREENTECH COLLEGE OF ENGINEERING FOR WOMEN",
        "GRT INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "HAJI SHEIK ISMAIL ENGINEERING COLLEGE",
        "HINDUSTHAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "HINDUSTHAN INSTITUTE OF TECHNOLOGY",
        "HOLY CROSS ENGINEERING COLLEGE",
        "HOSUR INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "IDHAYA ENGINEERING COLLEGE FOR WOMEN",
        "IFET COLLEGE OF ENGINEERING",
        "IIM Ahmedabad",
        "IIM Amritsar",
        "IIM Bangalore",
        "IIM Bodh Gaya",
        "IIM Calcutta",
        "IIM Indore",
        "IIM Jammu",
        "IIM Kashipur",
        "IIM Kozhikode",
        "IIM Lucknow",
        "IIM Nagpur",
        "IIM Raipur",
        "IIM Ranchi",
        "IIM Rohtak",
        "IIM Sambalpur",
        "IIM Shillong",
        "IIM Sirmaur",
        "IIM Tiruchirappalli",
        "IIM Udaipur",
        "IIM Visakhapatnam",
        "IIT (BHU) Varanasi",
        "IIT Bhilai",
        "IIT Bhubaneswar",
        "IIT Bombay",
        "IIT Delhi",
        "IIT Dhanbad",
        "IIT Dharwad",
        "IIT Gandhinagar",
        "IIT Goa",
        "IIT Guwahati",
        "IIT Hyderabad",
        "IIT Indore",
        "IIT Jammu",
        "IIT Jodhpur",
        "IIT Kanpur",
        "IIT Kharagpur",
        "IIT Madras",
        "IIT Mandi",
        "IIT Palakkad",
        "IIT Patna",
        "IIT Roorkee",
        "IIT Ropar",
        "IIT Tirupati",
        "IIIT Hyderabad",
        "IMAYAM COLLEGE OF ENGINEERING",
        "IMMANUEL ARASAR J J COLLEGE OF ENGINEERING",
        "INDIRA GANDHI COLLEGE OF ENGINEERING AND TECHNOLOGY FOR WOMEN",
        "INDIRA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "INDRA GANESAN COLLEGE OF ENGINEERING",
        "INDUS COLLEGE OF ENGINEERING",
        "INFANT JESUS COLLEGE OF ENGINEERING",
        "INFO INSTITUTE OF ENGINEERING",
        "INSTITUTE OF ROAD AND TRANSPORT TECHNOLOGY",
        "J C T COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "J E I MATHAAJEE COLLEGE OF ENGINEERING",
        "J K K MUNIRAJAH COLLEGE OF TECHNOLOGY",
        "J P COLLEGE OF ENGINEERING",
        "J.J.COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "J.K.K. NATTRAJA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "JAINEE COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "JAIRUPAA COLLEGE OF ENGINEERING",
        "JAMES COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "JANSONS INSTITUTE OF TECHNOLOGY",
        "JAWAHAR ENGINEERING COLLEGE",
        "JAY SHRIRAM GROUP OF INSTITUTIONS",
        "JAYA ENGINEERING COLLEGE",
        "JAYA INSTITUTE OF TECHNOLOGY",
        "JAYA SURIYA ENGINEERING COLLEGE",
        "JAYALAKSHMI INSTITUTE OF TECHNOLOGY",
        "JAYAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "JAYAMATHA ENGINEERING COLLEGE",
        "JAYARAJ ANNAPACKIAM CSI COLLEGE OF ENGINEERING",
        "JAYARAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "JEPPIAAR ENGINEERING COLLEGE",
        "JERUSALEM COLLEGE OF ENGINEERING",
        "JNN INSTITUTE OF ENGINEERING",
        "JOE SURESH ENGINEERING COLLEGE",
        "JOHN BOSCO ENGINEERING COLLEGE",
        "K N S K COLLEGE OF ENGINEERING",
        "K P R INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "K S R INSTITUTE FOR ENGINEERING AND TECHNOLOGY",
        "K. RAMAKRISHNAN COLLEGE OF ENGINEERING",
        "K.C.G. COLLEGE OF TECHNOLOGY",
        "K.L.N.COLLEGE OF ENGINEERING",
        "K.L.N.COLLEGE OF INFORMATION TECHNOLOGY",
        "K.RAMAKRISHNAN COLLEGE OF TECHNOLOGY",
        "K.S.K COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "K.S.R. COLLEGE OF ENGINEERING (AUTONOMOUS)",
        "K.S.RANGASAMY COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        "KALAIGNAR KARUNANIDHI INSTITUTE OF TECHNOLOGY",
        "KALAIVANI COLLEGE OF TECHNOLOGY",
        "KALASALINGAM INSTITUTE OF TECHNOLOGY",
        "KALSAR COLLEGE OF ENGINEERING",
        "KAMARAJ COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "KANCHI PALLAVAN ENGINEERING COLLEGE",
        "KARPAGA VINAYAGA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "KARPAGAM COLLEGE OF ENGINEERING (AUTONOMOUS)",
        "KARPAGAM INSTITUTE OF TECHNOLOGY",
        "KARUR COLLEGE OF ENGINEERING",
        "KATHIR COLLEGE OF ENGINEERING",
        "KGISL INSTITUTE OF TECHNOLOGY",
        "KING COLLEGE OF TECHNOLOGY",
        "KINGS COLLEGE OF ENGINEERING",
        "KINGS ENGINEERING COLLEGE",
        "KINGSTON ENGINEERING COLLEGE",
        "KIT & KIM TECHNICAL CAMPUS",
        "KNOWLEDGE INSTITUTE OF TECHNOLOGY",
        "KONGU ENGINEERING COLLEGE (AUTONOMOUS)",
        "KONGUNADU COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "KRISHNASAMY COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "KRS COLLEGE OF ENGINEERING",
        "KTVR KNOWLEDGE PARK FOR ENGINEERING AND TECHNOLOGY",
        "KUMARAGURU COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        "KURINJI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "LATHA MATHAVAN ENGINEERING COLLEGE",
        "LORD AYYAPPA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "LORD JEGANNATH COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "LORD VENKATESHWARAA ENGINEERING COLLEGE",
        "LOURDES MOUNT COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "LOYOLA - ICAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "LOYOLA INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "LOYOLA INSTITUTE OF TECHNOLOGY",
        "M R K INSTITUTE OF TECHNOLOGY",
        "M.A.M COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "M.A.M COLLEGE OF ENGINEERING",
        "M.A.M. SCHOOL OF ENGINEERING",
        "M.A.R. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "M.E.T ENGINEERING COLLEGE",
        "M.I.E.T ENGINEERING COLLEGE",
        "M.KUMARASAMY COLLEGE OF ENGINEERING (AUTONOMOUS)",
        "M.P. NACHIMUTHU M. JAGANATHAN ENGINEERING COLLEGE",
        "MAAMALLAN INSTITUTE OF TECHNOLOGY",
        "MADHA ENGINEERING COLLEGE",
        "MADHA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "MADURAI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "MAGNA COLLEGE OF ENGINEERING",
        "MAHA BARATHI ENGINEERING COLLEGE",
        "MAHAKAVI BHARATHIYAR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "MAHALAKSHMI ENGINEERING COLLEGE",
        "MAHARAJA ENGINEERING COLLEGE FOR WOMEN",
        "MAHARAJA ENGINEERING COLLEGE",
        "MAHARAJA INSTITUTE OF TECHNOLOGY",
        "MAHARAJA PRITHVI ENGINEERING COLLEGE",
        "MAHATH AMMA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "MAHENDRA COLLEGE OF ENGINEERING",
        "MAHENDRA ENGINEERING COLLEGE (AUTONOMOUS)",
        "MAHENDRA ENGINEERING COLLEGE FOR WOMEN",
        "MAHENDRA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "MAHENDRA INSTITUTE OF TECHNOLOGY",
        "MAILAM ENGINEERING COLLEGE",
        "Malaviya National Institute of Technology, Jaipur",
        "MANGAYARKARASI COLLEGE OF ENGINEERING",
        "MAR EPHRAEM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "MARIA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "MARTHANDAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "Maulana Azad National Institute of Technology, Bhopal",
        "MEENAKSHI COLLEGE OF ENGINEERING",
        "MEENAKSHI RAMASWAMY ENGINEERING COLLEGE",
        "MEENAKSHI SUNDARARAJAN ENGINEERING COLLEGE",
        "MEPCO SCHLENK ENGINEERING COLLEGE (AUTONOMOUS)",
        "MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE",
        "MNSK COLLEGE OF ENGINEERING",
        "MOHAMED SATHAK ENGINEERING COLLEGE",
        "MOHAMMED SATHAK A.J.COLLEGE OF ENGINEERING",
        "MOOKAMBIGAI COLLEGE OF ENGINEERING",
        "MOTHER TERASA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "Motilal Nehru National Institute of Technology, Allahabad",
        "MOUNT ZION COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "MUTHAYAMMAL COLLEGE OF ENGINEERING",
        "MUTHAYAMMAL ENGINEERING COLLEGE",
        "N P R COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "N.S.N. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY",
        "NANDHA COLLEGE OF TECHNOLOGY",
        "NANDHA ENGINEERING COLLEGE (AUTONOMOUS)",
        "NARASU'S SARATHY INSTITUTE OF TECHNOLOGY",
        "NARAYANAGURU SIDDHARTHA COLLEGE OF ENGINEERING",
        "NATIONAL COLLEGE OF ENGINEERING",
        "NATIONAL ENGINEERING COLLEGE (AUTONOMOUS)",
        "National Institute of Technology Uttarakhand",
        "National Institute of Technology, Agartala",
        "National Institute of Technology, Arunachal Pradesh (Yupia)",
        "National Institute of Technology, Calicut",
        "National Institute of Technology, Delhi",
        "National Institute of Technology, Durgapur",
        "National Institute of Technology, Goa",
        "National Institute of Technology, Hamirpur",
        "National Institute of Technology, Jamshedpur",
        "National Institute of Technology, Kurukshetra",
        "National Institute of Technology, Manipur",
        "National Institute of Technology, Meghalaya",
        "National Institute of Technology, Mizoram",
        "National Institute of Technology, Nagaland",
        "National Institute of Technology, Patna",
        "National Institute of Technology, Pondicherry",
        "National Institute of Technology, Raipur",
        "National Institute of Technology, Rourkela",
        "National Institute of Technology, Sikkim",
        "National Institute of Technology, Silchar",
        "National Institute of Technology, Srinagar",
        "National Institute of Technology, Surathkal",
        "National Institute of Technology, Tadepalligudem",
        "National Institute of Technology, Trichy",
        "National Institute of Technology, Warangal",
        "NEHRU INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "NEHRU INSTITUTE OF TECHNOLOGY",
        "NELLIANDAVAR INSTITUTE OF TECHNOLOGY",
        "NEW PRINCE SHRI BHAVANI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "NIGHTINGALE INSTITUTE OF TECHNOLOGY",
        "OAS INSTITUTE OF TECHNOLOGY AND MANAGEMENT, GROUP OF INSTITUTIONS",
        "ODAIYAPPA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "OXFORD COLLEGE OF ENGINEERING",
        "OXFORD ENGINEERING COLLEGE",
        "P A COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "P G P COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "P.B. COLLEGE OF ENGINEERING",
        "P.R.ENGINEERING COLLEGE",
        "P.S.G. COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        "P.S.R ENGINEERING COLLEGE (AUTONOMOUS)",
        "P.S.R.RENGASAMY COLLEGE OF ENGINEERING FOR WOMEN",
        "P.S.V.COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "P.T. LEE CHENGALVARAYA NAICKER COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "P.T.R.COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PAAVAAI GROUP OF INSTITUTIONS",
        "PAAVAI COLLEGE OF ENGINEERING",
        "PAAVAI ENGINEERING COLLEGE",
        "PALLAVA RAJA COLLEGE OF ENGINEERING",
        "PALLAVAN COLLEGE OF ENGINEERING",
        "PANDIAN SARASWATHI YADAV ENGINEERING COLLEGE",
        "PANIMALAR ENGINEERING COLLEGE",
        "PANIMALAR INSTITUTE OF TECHNOLOGY",
        "PANNAI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PARISUTHAM INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "PARK COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PARK COLLEGE OF TECHNOLOGY",
        "PAVAI COLLEGE OF TECHNOLOGY",
        "PAVENDAR BHARATHIDASAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PAVENDAR BHARATHIDASAN INSTITUTE OF INFORMATION TECHNOLOGY",
        "PERI INSTITUTE OF TECHNOLOGY",
        "PET ENGINEERING COLLEGE",
        "PMR ENGINEERING COLLEGE",
        "PODHIGAI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "POLLACHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "PONJESLY COLLEGE OF ENGINEERING",
        "PONNAIYAH RAMAJAYAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PPG INSTITUTE OF TECHNOLOGY",
        "PRATHYUSHA INSTITUTE OF TECHNOLOGY AND MANAGEMENT",
        "PRINCE DR.K.VASUDEVAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "PRINCE SHRI VENKATESHWARA PADMAVATHY ENGINEERING COLLEGE",
        "PRIYADARSHINI ENGINEERING COLLEGE",
        "PROFESSIONAL GROUP OF INSTITUTIONS",
        "PSG College of Technology",
        "PSG INSTITUTE OF TECHNOLOGY AND APPLIED RESEARCH",
        "PSN COLLEGE OF ENGINEERING AND TECHNOLOGY (AUTONOMOUS)",
        "PSN ENGINEERING COLLEGE",
        "PSN INSTITUTE OF TECHNOLOGY AND SCIENCE",
        "PSNA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "R V S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "R.M.D. ENGINEERING COLLEGE",
        "R.M.K. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "R.M.K. ENGINEERING COLLEGE",
        "R.V.S. PADHMAVATHY COLLEGE OF ENGINEERING & TECHNOLOGY",
        "R.V.S. SCHOOL OF ENGINEERING AND TECHNOLOGY",
        "RAJA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "RAJALAKSHMI ENGINEERING COLLEGE",
        "RAJALAKSHMI INSTITUTE OF TECHNOLOGY",
        "RAJAS INTERNATIONAL INSTITUTE OF TECHNOLOGY FOR WOMEN",
        "RAJIV GANDHI COLLEGE OF ENGINEERING",
        "RAMCO INSTITUTE OF TECHNOLOGY",
        "RANGANATHAN ENGINEERING COLLEGE",
        "RANIPPETTAI ENGINEERING COLLEGE",
        "RATHINAM TECHNICAL CAMPUS",
        "RATNAVEL SUBRAMANIAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "RENGANAYAGI VARATHARAJ COLLEGE OF ENGINEERING",
        "RMK College of Engineering and Technology",
        "ROEVER COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ROEVER ENGINEERING COLLEGE",
        "ROHINI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "RRASE COLLEGE OF ENGINEERING",
        "RVS TECHNICAL CAMPUS - COIMBATORE",
        "S N S COLLEGE OF ENGINEERING",
        "S R S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "S V National Institute of Technology, Surat",
        "S V S COLLEGE OF ENGINEERING",
        "S.A. ENGINEERING COLLEGE",
        "S.K.P. ENGINEERING COLLEGE",
        "S.K.P. INSTITUTE OF TECHNOLOGY",
        "S.K.R. ENGINEERING COLLEGE",
        "S.R.I COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "S.R.R. ENGINEERING COLLEGE",
        "S.S.M. COLLEGE OF ENGINEERING",
        "S.VEERASAMY CHETTIAR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SACS M.A.V.M.M ENGINEERING COLLEGE",
        "SAKTHI ENGINEERING COLLEGE",
        "SAKTHI MARIAMMAN ENGINEERING COLLEGE",
        "SALEM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SAMS COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SAPTHAGIRI COLLEGE OF ENGINEERING",
        "SARANATHAN COLLEGE OF ENGINEERING",
        "SARASWATHI VELU COLLEGE OF ENGINEERING",
        "SARASWATHY COLLEGE OF ENGINEERING & TECHNOLOGY",
        "SARDAR RAJA COLLEGE OF ENGINEERING",
        "Sastra University, Thanjavur",
        "SASURIE ACADEMY OF ENGINEERING",
        "SASURIE COLLEGE OF ENGINEERING",
        "Sathyabama University",
        "SATYAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SAVEETHA ENGINEERING COLLEGE",
        "SBM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SCAD COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SCAD ENGINEERING COLLEGE",
        "SCAD INSTITUTE OF TECHNOLOGY",
        "SELVAM COLLEGE OF TECHNOLOGY",
        "SEMBODAI RUKMANI VARATHARAJAN ENGINEERING COLLEGE",
        "SENGUNTHAR COLLEGE OF ENGINEERING",
        "SENGUNTHAR ENGINEERING COLLEGE",
        "SETHU INSTITUTE OF TECHNOLOGY (AUTONOMOUS)",
        "SHANMUGANATHAN ENGINEERING COLLEGE",
        "SHIVANI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SHIVANI ENGINEERING COLLEGE",
        "SHREE MOTILAL KANHAIYALAL FOMRA INSTITUTE OF TECHNOLOGY",
        "SHREE SATHYAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SHREE VENKATESHWARA HI-TECH ENGINEERING COLLEGE",
        "SHREENIVASA ENGINEERING COLLEGE",
        "SHRI ANDAL ALAGAR COLLEGE OF ENGINEERING",
        "SHRI ANGALAMMAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SHRI SAPTHAGIRI INSTITUTE OF TECHNOLOGY",
        "SIR ISSAC NEWTON COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SIVAJI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SMR EAST COAST COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SNS COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        "SONA COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        "SREE KRISHNA COLLEGE OF ENGINEERING",
        "SREE SAKTHI ENGINEERING COLLEGE",
        "SREE SASTHA COLLEGE OF ENGINEERING",
        "SREE SASTHA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "SREE SOWDAMBIKA COLLEGE OF ENGINEERING",
        "SRG ENGINEERING COLLEGE",
        "SRI ARAVINDAR ENGINEERING COLLEGE",
        "SRI BALAJI CHOCKALINGAM ENGINEERING COLLEGE",
        "SRI BHARATHI ENGINEERING COLLEGE FOR WOMEN",
        "SRI ESHWAR COLLEGE OF ENGINEERING",
        "SRI JAYARAM INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "SRI KRISHNA COLLEGE OF ENGINEERING & TECHNOLOGY (AUTONOMOUS)",
        "SRI KRISHNA COLLEGE OF ENGINEERING",
        "SRI KRISHNA COLLEGE OF TECHNOLOGY (AUTONOMOUS)",
        "SRI KRISHNA ENGINEERING COLLEGE",
        "SRI KRISHNA INSTITUTE OF TECHNOLOGY",
        "SRI LAKSHMI AMMAL ENGINEERING COLLEGE",
        "SRI MUTHUKUMARAN INSTITUTE OF TECHNOLOGY",
        "SRI NANDHANAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SRI RAAJA RAAJAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SRI RAMAKRISHNA COLLEGE OF ENGINEERING",
        "SRI RAMAKRISHNA ENGINEERING COLLEGE (AUTONOMOUS)",
        "SRI RAMAKRISHNA INSTITUTE OF TECHNOLOGY",
        "SRI RAMANA MAHARISHI COLLEGE OF ENGINEERING",
        "SRI RAMANATHAN ENGINEERING COLLEGE",
        "SRI RAMANUJAR ENGINEERING COLLEGE",
        "SRI RANGANATHAR INSTITUTE OF ENGINEERING & TECHNOLOGY",
        "SRI RANGAPOOPATHI COLLEGE OF ENGINEERING",
        "SRI SAI RAM INSTITUTE OF TECHNOLOGY",
        "SRI SAIRAM ENGINEERING COLLEGE",
        "SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "SRI SHANMUGHA COLLEGE OF ENGG. AND TECH.",
        "SRI SIVASUBRAMANIYA NADAR COLLEGE OF ENGINEERING",
        "SRI SUBRAMANYA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SRI VENKATESHWARA INSTITUTE OF ENGINEERING",
        "SRI VENKATESWARA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SRI VENKATESWARA COLLEGE OF ENGINEERING",
        "SRI VENKATESWARA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "SRI VENKATESWARAA COLLEGE OF TECHNOLOGY",
        "SRI VIDYA COLLEGE OF ENGINEERING & TECHNOLOGY",
        "SRIGURU INSTITUTE OF TECHNOLOGY",
        "SRINIVASA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "SRINIVASAN ENGINEERING COLLEGE",
        "SRIRAM ENGINEERING COLLEGE",
        "SRM University, Kattangulathur",
        "SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "ST. JOSEPH COLLEGE OF ENGINEERING",
        "ST.ANNE'S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ST.JOSEPH'S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ST.JOSEPH'S COLLEGE OF ENGINEERING",
        "ST.JOSEPH'S INSTITUTE OF TECHNOLOGY",
        "ST.MICHAEL COLLEGE OF ENGINEERING & TECHNOLOGY",
        "ST.MOTHER THERESA ENGINEERING COLLEGE",
        "ST.PETER'S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "ST.XAVIER'S CATHOLIC COLLEGE OF ENGINEERING",
        "STAR LION COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "STELLA MARY'S COLLEGE OF ENGINEERING",
        "SUDHARSAN ENGINEERING COLLEGE",
        "SUGUNA COLLEGE OF ENGINEERING",
        "SUN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "SUREYA COLLEGE OF ENGINEERING",
        "SURYA ENGINEERING COLLEGE",
        "SURYA GROUP OF INSTITUTIONS",
        "SYED AMMAL ENGINEERING COLLEGE",
        "T.J. INSTITUTE OF TECHNOLOGY",
        "T.J.S. ENGINEERING COLLEGE",
        "T.S.M. JAIN COLLEGE OF TECHNOLOGY",
        "TAGORE ENGINEERING COLLEGE",
        "TAGORE INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        "TAMILNADU COLLEGE OF ENGINEERING",
        "TAMIZHAN COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "TEJAA SHAKTHI INSTITUTE OF TECHNOLOGY FOR WOMEN",
        "THAMIRABHARANI ENGINEERING COLLEGE",
        "THANGAVELU ENGINEERING COLLEGE",
        "THANTHAI PERIYAR GOVT INSTITUTE OF TECHNOLOGY",
        "THE KAVERY COLLEGE OF ENGINEERING",
        "THE KAVERY ENGINEERING COLLEGE",
        "THE RAJAAS ENGINEERING COLLEGE",
        "THENI KAMMAVAR SANGAM COLLEGE OF TECHNOLOGY",
        "THIAGARAJAR COLLEGE OF ENGINEERING (AUTONOMOUS)",
        "THIRUMALAI ENGINEERING COLLEGE",
        "THIRUVALLUVAR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "TRICHY ENGINEERING COLLEGE",
        "TRP ENGINEERING COLLEGE",
        "UDAYA SCHOOL OF ENGINEERING",
        "ULTRA COLLEGE OF ENGINEERING AND TECHNOLOGY FOR WOMEN",
        "UNITED INSTITUTE OF TECHNOLOGY",
        "UNIVERSAL COLLEGE OF ENGINEERING & TECHNOLOGY",
        "UNIVERSITY COLLEGE OF ENGINEERING, ARIYALUR",
        "UNIVERSITY COLLEGE OF ENGINEERING, ARNI",
        "UNIVERSITY COLLEGE OF ENGINEERING, DINDIGUL",
        "UNIVERSITY COLLEGE OF ENGINEERING, KANCHIPURAM",
        "UNIVERSITY COLLEGE OF ENGINEERING, NAGERCOIL",
        "UNIVERSITY COLLEGE OF ENGINEERING, PANRUTI",
        "UNIVERSITY COLLEGE OF ENGINEERING, PATTUKKOTTAI",
        "UNIVERSITY COLLEGE OF ENGINEERING, RAMANATHAPURAM",
        "UNIVERSITY COLLEGE OF ENGINEERING, THIRUKKUVALAI",
        "UNIVERSITY COLLEGE OF ENGINEERING, TINDIVANAM",
        "UNIVERSITY COLLEGE OF ENGINEERING, TIRUCHIRAPPALLI",
        "UNIVERSITY COLLEGE OF ENGINEERING, VILLUPURAM",
        "UNIVERSITY VOC COLLEGE OF ENGINEERING, THOOTHUKUDI",
        "UNNAMALAI INSTITUTE OF TECHNOLOGY",
        "V K S COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "V S A EDUCATIONAL AND CHARITABLE TRUST'S GROUP OF INSTITUTIONS",
        "V V COLLEGE OF ENGINEERING",
        "V.P.MUTHAIAH PILLAI MEENAKSHI AMMAL ENGINEERING COLLEGE FOR WOMEN",
        "V.R.S. COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "V.S.B. COLLEGE OF ENGINEERING TECHNICAL CAMPUS",
        "V.S.B. ENGINEERING COLLEGE",
        "VAIGAI COLLEGE OF ENGINEERING",
        "VALLIAMMAI ENGINEERING COLLEGE",
        "VANDAYAR ENGINEERING COLLEGE",
        "VARUVAN VADIVELAN INSTITUTE OF TECHNOLOGY",
        "VEDHANTHA INSTITUTE OF TECHNOLOGY",
        "VEERAMMAL ENGINEERING COLLEGE",
        "VEL TECH HIGH TECH DR.RANGARAJAN DR.SAKUNTHALA ENGINEERING COLLEGE",
        "VEL TECH MULTI TECH DR.RANGARAJAN DR.SAKUNTHALA ENGINEERING COLLEGE",
        "VEL TECH",
        "VELALAR COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VELAMMAL ENGINEERING COLLEGE",
        "VELAMMAL INSTITUTE OF TECHNOLOGY",
        "Vels University",
        "VETRI VINAYAHA COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VI INSTITUTE OF TECHNOLOGY",
        "VICKRAM COLLEGE OF ENGINEERING",
        "VIDHYA MANDHIR INSTITUTE OF TECHNOLOGY",
        "VIDYAA VIKAS COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "VINS CHRISTIAN COLLEGE OF ENGINEERING",
        "VINS CHRISTIAN WOMEN'S COLLEGE OF ENGINEERING",
        "VISHNU LAKSHMI COLLEGE OF ENGINEERING AND TECHNOLOGY",
        "Visvesvaraya National Institute of Technology, Nagpur",
        "VIT University, Chennai",
        "VIT University, Vellore ",
        "VIVEKANANDHA COLLEGE OF ENGINEERING FOR WOMEN (AUTONOMOUS)",
        "VIVEKANANDHA COLLEGE OF TECHNOLOGY FOR WOMEN",
        "VIVEKANANDHA INSTITUTE OF ENGINEERING & TECHNOLOGY FOR WOMEN",
        "VPV COLLEGE OF ENGINEERING",
        "Other"
      ];
      /*ctrl.department = ctrl.departments[1];*/

      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
    }

    function schedule() {
      toaster.pop("info", "Info", "Check out the schedule @ https://drive.google.com/file/d/0B16nUyywUnKPMEtiXzVVRXVoUUk/view", 30000)
    }

    /*function routes() {
      console.log("router");
      ctrl.right = true;
      toaster.pop("success", "Bus Route", "From koyambedu : M70, koyambedu to guindy, guindy to Anna university, Pondicherry buses.", 5000);
      setTimeout(function () {
        toaster.pop("success", "Bus Route", "From guindy : all Anna university buses.", 5000);
      }, 50001);
      setTimeout(function () {
        toaster.pop("success", "Bus Route", "From egmore: Egmore to guindy Railway Station to Anna university.", 5000);
      }, 100002);
      ctrl.right = false;
    }*/


    function notification(title, body, link) {
      webNotification.showNotification(title, {
        body: body,
        icon: '../images/test.png',
        onClick: function onNotificationClicked() {
          /*console.log('Notification clicked.');*/
          $window.open(link);
        },
        autoClose: 15000
      });
    }

    function checkCookies() {
      if($cookieStore.get('userDetails')){
        console.log("logged in");
        ctrl.userDetails = $cookieStore.get('userDetails');
        ctrl.loggedIn = true;
      }
      else{
        console.log("not logged in");
      }
    }
    
    function detect () {
      angular.element(window).bind("scroll", function(){
        ctrl.page = window.pageYOffset;
        console.log(ctrl.page);
      });
    }
    ctrl.page = window.pageYOffset;
    console.log(ctrl.page);

    ctrl.displayNav = function() {
      ctrl.maxWidth = ctrl.maxWidth === 0 ? '50px' : 0;
      ctrl.showNav = !ctrl.showNav;
    };

    ctrl.stateChange = function(page) {
      $state.go(page);
    };

    ctrl.scrollDown = function () {
      var esc = $.Event("keydown", { keyCode: 40 });
      /*$(document).ready(function() {
        $("body").trigger(esc);
      });*/
      var keyboardEvent = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : "", char : "", shiftKey : false, code: "ArrowDown", keyCode: 40, which: 40, charCode: 0});
      document.getElementById('main').dispatchEvent(keyboardEvent);
    };

    ctrl.resetFullpage = function() {
      $.fn.fullpage.moveTo(1);
    };

    ctrl.openModal = function(page, size){
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
      $.fn.fullpage.moveTo(1);
      bodyRef.addClass('ovh');
      var modalInstance = $uibModal.open({
        templateUrl: '../views/' + page + '.html',
        backdrop: true,
        size: size,
        windowTopClass: 'modal-margin',
        resolve: {

        }
      });
      modalInstance.result.then(function (selectedItem) {
        // Remove it on closing
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        bodyRef.removeClass('ovh');

      }, function () {
        // Remove it on dismissal
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
        bodyRef.removeClass('ovh');

      });
    };

    ctrl.check= function(){
      console.log("-a--------------");
    //  alert('ok');
    };

    ctrl.login = function(){
      var obj = {
        user_email:  ctrl.email
      };

      console.log(JSON.stringify(obj));
      MainService.Login(obj).then(function (response) {
        console.log(response);
        $cookieStore.put('userDetails', response.data);
        //checkCookies();
        /*$window.location.reload();*/
        $state.go('check');
        if(response.status == 200){
          $cookieStore.put('userDetails', response.data);
          //checkCookies();
          /*$window.location.reload();*/
          $state.go('check');
          /*if(response.data != 404){
            toaster.pop("success", "Success", "Successfully Logged In", 3000);
            $cookieStore.put('userDetails', response.data);
            //checkCookies();
            /!*$window.location.reload();*!/
            $state.go('check');
          }
          else{
            toaster.pop("error", "Error", "Invalid Username or Password", 3000);
            console.log("Invalid Username or Password");
          }*/
        }
      })
    };

    ctrl.register = function () {
      ctrl.isSubmitting = true;
      /*if(vcRecaptchaService.getResponse() === ""){ //if string is empty
         toaster.pop("error", "Error", "Please resolve the captcha and submit!", 3000);
      }
      else {*/
        /*if(ctrl.phoneNumber >= 7000000000 && ctrl.phoneNumber <= 9999999999 && ctrl.password.length >= 8) {*/
          /*console.log(vcRecaptchaService.getResponse());*/
          var obj = {
            user_email    : ctrl.emailId,
            user_name     : ctrl.name,
            user_phone    : ctrl.phoneNumber,
            user_college  : ctrl.collegeName,
            user_dept     : ctrl.department,
            user_year     : ctrl.year
            /*recaptcha     : 'abc'*/
          };

          console.log(JSON.stringify(obj));

          MainService.Register(obj).then(function (response) {
            //console.log(response);
            $cookieStore.put('userDetails', response.data);
            //checkCookies();
            /*$window.location.reload();*/
            $state.go('check');
            /*if(response.status == 200){
              if(response.data.a_id){
                toaster.pop("success", "Success", "Successfully Logged In", 3000);

              }
              else{
                toaster.pop("error", "Error", response.data, 3000);
                console.log(response.data);
              }
            }*/
            ctrl.isSubmitting = false;
          });
        /*}
        else {
          toaster.pop("error", "Error", "Enter valid phone number or password", 5000);
        }*/
      /*}*/
    };

    ctrl.openRegister = function() {
      /*$uibModalStack.dismissAll();
      var modalInstance = $uibModal.open({
        templateUrl: '../views/register.html',
        backdrop: true,
        size: 'md',
        windowTopClass: 'modal-margin',
        resolve: {

        }
      });
      modalInstance.result.then(function (selectedItem) {


      }, function () {

      });*/
      $state.go('register');
    };

    ctrl.logout = function(){
      $cookieStore.remove('userDetails');
      ctrl.loggedIn = false;
      toaster.pop("success", "Success", "Successfully Logged Out!");
    };

    ctrl.openUniq = function() {
      $window.open("http://www.inplanttraining.org/");
      $window.open("http://www.internshipinchennai.com/");
      $window.open("http://www.ieeefinalyearprojects.org/");
      $window.open("http://www.androidtraininginchennai.com/");
    };

    ctrl.checkPhoneNumber = function() {
      console.log("Phoen");
        if(ctrl.phoneNumber >= 7000000000 && ctrl.phoneNumber <= 9999999999){
          ctrl.phoneNumberNotValid = false;
        }
      else {
          ctrl.phoneNumberNotValid = true;
        }
    };

    ctrl.checkPassword = function () {
      console.log("pppp");
      if(ctrl.password.length < 8){
        ctrl.passwordInvalid = true;
      }
      else{
        ctrl.passwordInvalid = false;
      }
    };

    ctrl.openLink = function(link){
      $window.open(link);
    }
  }

})();
