(function() {
    'use strict';

    var states = [
        {
            name: 'register',
            state:
            {
                url:'/register',
                templateUrl: 'views/register.html',
                data: {
                    text: "register",
                    visible: false
                }
            }
        },
        {
            name: 'check',
            state:
            {
                url:'/check',
                templateUrl: 'views/details.html',
                data: {
                    text: "login",
                    visible: false
                }
            }
        },
        {
            name: 'login',
            state:
            {
                url:'/login',
                templateUrl: 'views/login.html',
                data: {
                    text: "login",
                    visible: false
                }
            }
        }
    ];

    var abacus = angular.module('abacus', [
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'toaster',
        'fullPage.js',
        'swipe',
        'ui.bootstrap',
        /*'vcRecaptcha',*/
        'ngSanitize',
        'angular-web-notification'
    ]);
    /*.run(
     function($location) {
     $location.path('');
     }
     )*/

    /*abacus.run(function($rootScope, $uibModalStack, $window, $location) {
        $window.ga('create', 'UA-93008925-1', 'auto');

        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });

        $rootScope.$on('$locationChangeStart', function (event) {
            $uibModalStack.dismissAll();
        });
    });*/

    abacus.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/register');

        angular.forEach(states, function (state) {
            $stateProvider.state(state.name, state.state);
        });
    });

})();