(function (angular) {

  var myApp = angular.module('Championship', []);

  myApp.controller('ChampionshipCtrl', ['$scope', 'INPUT', function ($scope, input) {
    $scope.input = input;

    $scope.cellStyle = function(rowPlayer, colPlayer) {
      if (rowPlayer == colPlayer) {
        return 'dark';
      } else if ($scope.focusedRowPlayer && ($scope.focusedRowPlayer == rowPlayer || $scope.focusedColPlayer == colPlayer)){
        return 'highlight';
      } else if ($scope.focusedRowPlayer == colPlayer && $scope.focusedColPlayer == rowPlayer){
        return 'vs-highlight';
      }
    };
    $scope.mouseOver = function(rowPlayer, colPlayer) {
      $scope.focusedRowPlayer = rowPlayer;
      $scope.focusedColPlayer = colPlayer;
    };
  }]);

})(window.angular);