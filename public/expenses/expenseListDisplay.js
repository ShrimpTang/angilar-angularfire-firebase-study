angular.module('app')
.component('expenseDisplay',{
    templateUrl:'expenses/expenseListDisplay.html',
    bindings:{
        expenses:'='
    },
    controller: function () {
        this.remove = function (e) {
            this.expenses.$remove(e)
        }

    }

})