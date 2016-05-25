angular.module('app').factory('expenseList', function ($firebaseArray) {
    var ExpenseList = $firebaseArray.$extend({
            getTotal: function () {
                var total = 0;
                angular.forEach(this.$list, function (e) {
                    total += e.amount;
                })
            }
    })
    return function (ref) {
        return new ExpenseList(ref);
    }
});