angular.module('app')
    //.constant('fireBaseUrl', 'https://angular-firebase-test-66da9.firebaseio.com/')
    //.service('rootRef',['fireBaseUrl',Firebase])
    .config(function ($firebaseRefProvider) {
        $firebaseRefProvider.registerUrl('https://amber-fire-1557.firebaseio.com/')
    })