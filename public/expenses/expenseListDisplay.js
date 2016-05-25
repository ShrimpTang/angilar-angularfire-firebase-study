angular.module('app')
.component('expenseDisplay',{
    templateUrl:'expenses/expenseListDisplay.html',
    bindings:{
        expenses:'='
    }

})