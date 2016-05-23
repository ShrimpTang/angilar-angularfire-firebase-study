angular.module('app')
    .component('login', {
        templateUrl: 'security/login.html',
        bindings:{
          currentAuth:'='
        },
        controller: function ($firebaseAuthService, $location) {
            this.loggedIn = !!this.currentAuth;
            this.anonLogin = function () {
                $firebaseAuthService.$authAnonymously()
                    .then(function (data) {
                        $location.path('/home');
                    })
                    .catch(function (err) {
                        this.errMessage = err.code
                    })
            }.bind(this);

            this.fbLogin = function () {

                $firebaseAuthService.$authWithOAuthPopup('facebook')
                    .then(function (data) {
                        $location.path('/home');
                    })
                    .catch(function (err) {
                        this.errMessage = err.code
                    })
            }.bind(this);
        }
    })
