angular.module('app')
    .component('login', {
        templateUrl: 'security/login.html',
        bindings:{
          currentAuth:'='
        },
        controller: function ($firebaseAuthService, $location) {
            var vm = this;
            this.loggedIn = !!this.currentAuth;
            this.anonLogin = function () {
                $firebaseAuthService.$authAnonymously()
                    .then(function (data) {
                        $location.path('/home');
                    })
                    .catch(function (err) {
                        vm.errMessage = err.code
                    })
            }

            this.fbLogin = function () {

                $firebaseAuthService.$authWithOAuthPopup('facebook')
                    .then(function (data) {
                        $location.path('/home');
                    })
                    .catch(function (err) {
                        vm.errMessage = err.code
                    })
            }
        }
    })
