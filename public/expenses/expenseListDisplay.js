angular.module('app')
    .component('expenseDisplay', {
        templateUrl: 'expenses/expenseListDisplay.html',
        bindings: {
            expenses: '=',
            selectExpense:'&'
        },
        controller: function () {
            this.remove = function (e) {
                this.expenses.$remove(e)
            }
            this.clickRow = function (expense) {
                this.selectExpense({expense:expense});
            }
        }

    })