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