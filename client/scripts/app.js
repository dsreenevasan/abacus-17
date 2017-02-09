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
                templateUrl: 'views/eventsAndWorkshops.html',
                data: {
                    text: "Sample",
                    visible: false
                }
            }
        },
        {
            name: 'bg',
            state:
            {
                url:'/bg',
                templateUrl: 'views/bg.html',
                data: {
                    text: "Sample",
                    visible: false
                }
            }
        },
        {
            name: 'register',
            state: {
                url: '/register',
                templateUrl: 'views/register.html',
                data: {
                    text: "Register",
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
                    text: "Login",
                    visible: false
                }
            }
        },
        {
            name: 'underconstruction',
            state:
            {
                url:'/uc',
                templateUrl: 'views/underconstruction.html',
                data: {
                    text: "Underconstruction",
                    visible: false
                }
            }
        },
        {
            name: 'countdown',
            state:
            {
                url:'/countdown',
                templateUrl: 'views/countdown.html',
                data: {
                    text: "Countdown",
                    visible: false
                }
            }
        }
    ];

    var abacus = angular.module('abacus', [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'fullPage.js',
        'swipe'
    ]);
    /*.run(
     function($location) {
     $location.path('');
     }
     )*/

    abacus.run(function($rootScope, $uibModalStack) {
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