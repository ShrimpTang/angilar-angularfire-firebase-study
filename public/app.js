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
            .when('/userpref', {
                template: '<edit-user-pref user-preferences="$resolve.userPreferences"></edit-user-pref>',
                resolve: {

                    userPreferences: function (fbRef, $firebaseObject,$firebaseAuthService) {
                        return $firebaseAuthService.$requireAuth().then(function () {
                            return $firebaseObject(fbRef.getPreferencesRef()).$loaded();
                        })

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