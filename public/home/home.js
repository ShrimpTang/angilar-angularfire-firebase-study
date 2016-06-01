angular.module('app')
    .component('home', {
        bindings: {
            expensesInOrder: '=',
            categorise:'='

        },
        templateUrl: 'home/home.html',
        controller: function () {
            //console.log(this.expensesInOrder)
        }
    })