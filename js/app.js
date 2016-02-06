(function(angular) {

    var myApp = angular.module('Championship', []);

    myApp.controller('ChampionshipCtrl', ['$scope', 'INPUT', function ($scope, input) {
        $scope.input = input;

        $scope.cellStyle = function (playerA, playerB){
            if (playerA == playerB) {
                return 'dark';
            }
        }
    }]);

})(window.angular);