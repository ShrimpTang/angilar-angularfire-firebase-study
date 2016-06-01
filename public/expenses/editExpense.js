angular.module('app')
    .component('editExpense', {
        templateUrl: 'expenses/editExpense.html',
        bindings: {
            categories:'='
        },
        controller: function () {
            this.setDefaults = function () {
                this.amount = '';
                this.desc = '';
                this.payee = '';
                this.date = new Date('3/3/1985').toLocaleDateString();
                this.selectedCategory = this.categories[0];
            }
            this.setDefaults();
        }
    })