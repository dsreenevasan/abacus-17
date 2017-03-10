(function() {
    'use strict';

    var states = [
        {
            name: 'main',
            state:
            {
                url:'/main',
                templateUrl: 'views/main.html',
                data: {
                    text: "Main",
                    visible: false
                }
            }
        },
        {
            name: 'events',
            state:
            {
                url:'/events',
                templateUrl: 'views/events.html',
                data: {
                    text: "Sample",
                    visible: false
                }
            }
        },
        {
            name: 'workshops',
            state:
            {
                url:'/workshops',
                templateUrl: 'views/workshop.html',
                data: {
                    text: "Workshops",
                    visible: false
                }
            }
        },
        {
            name: 'workshops_reg_success',
            state:
            {
                url:'/workshops_reg_success',
                templateUrl: 'views/workshop_reg_success.html',
                data: {
                    text: "Workshops",
                    visible: false
                }
            }
        },
        {
            name: 'sa',
            state:
            {
                url:'/sa',
                templateUrl: 'views/sa.html',
                data: {
                    text: "Student Ambassador",
                    visible: false
                }
            }
        },
        {
            name: 'reach',
            state:
            {
                url:'/reach',
                templateUrl: 'views/reach.html',
                data: {
                    text: "Reach",
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
        'vcRecaptcha',
        'ngSanitize'
    ]);
    /*.run(
     function($location) {
     $location.path('');
     }
     )*/

    abacus.run(function($rootScope, $uibModalStack, $window, $location) {
        $window.ga('create', 'UA-93008925-1', 'auto');

        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });

        $rootScope.$on('$locationChangeStart', function (event) {
            $uibModalStack.dismissAll();
        });
    });

    abacus.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        angular.forEach(states, function (state) {
            $stateProvider.state(state.name, state.state);
        });
    });

})();