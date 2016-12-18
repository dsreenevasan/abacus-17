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
            name: 'sample',
            state:
            {
                url:'/sample',
                templateUrl: 'views/sample.html',
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
            state:
            {
                url:'/register',
                templateUrl: 'views/register.html',
                data: {
                    text: "Register",
                    visible: false
                }
            }
        }
    ];

    var abacus = angular.module('abacus', [
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'snap',
        'fullPage.js',
        'swipe'
    ]);
    /*.run(
     function($location) {
     $location.path('');
     }
     )*/
    abacus.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        angular.forEach(states, function (state) {
            $stateProvider.state(state.name, state.state);
        });
    });

})();