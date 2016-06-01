angular.module('app')
    .component('home', {
        bindings: {
            expensesInOrder: '=',
            categorise:'='

        },
        templateUrl: 'home/home.html',
        controller: function () {
            //console.log(this.expensesInOrder)
            this.createExpense = function (expenseData) {
                this.expensesInOrder.$add(expenseData);
            }
            this.editExpense = function (expense) {
                this.editedExpense = expense;
            }
            this.updateExpense = function(){
                this.expensesInOrder.$save(this.editedExpense)
            }
        }
    })