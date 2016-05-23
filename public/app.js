angular.module('app', ['firebase', 'ngRoute'])
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (e, next, prev,  err) {
            if(err === 'AUTH_REQUIRED'){
                $location.path('/login')
            }
        })

    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                template: '<home></home>',
                resolve:{
                    currentAuth: function ($firebaseAuthService) {
                        return $firebaseAuthService.$requireAuth()
                    }
                }
            })
            .when('/login', {
                template: '<login current-auth="$resolve.currentAuth"></login>',
                resolve: {
                    currentAuth: function ($firebaseAuthService) {
                        return $firebaseAuthService.$waitForAuth()
                    }
                }
            })  .when('/logout', {
                template: '<logout></logout>'
            })

            .otherwise('/home')
    });