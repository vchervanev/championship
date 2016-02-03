(function(angular) {

    var myApp = angular.module('Championship', []);

    myApp.controller('ChampionshipCtrl', ['$scope', 'INPUT', function ($scope, input) {
        $scope.input = input;
    }]);

})(window.angular);