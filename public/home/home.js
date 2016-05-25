angular.module('app')
    .component('home', {
        bindings: {
            expensesInOrder: '='
        },
        templateUrl: 'home/home.html',
        controller: function () {
            console.log(this.expensesInOrder)
        }
    })