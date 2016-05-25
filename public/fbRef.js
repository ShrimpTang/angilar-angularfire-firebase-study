angular.module('app').factory('fbRef', function ($firebaseRef, $firebaseAuthService) {
    return {
        getPreferencesRef: function () {
            return $firebaseRef.default.child('preferences').child($firebaseAuthService.$getAuth().uid);
        },
        getCategoryRef: function () {
            return $firebaseRef.default.child('categories');
        }
    }
})
