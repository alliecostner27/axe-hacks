angular.module('ionicApp', ['ionic'])
  .controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $timeout) {
  // Change the number of tasks here and in the SCSS
  $scope.numberTasks = 10;
  $scope.task = 1;

  $scope.timer = function() {
    $scope.task++;

    if ($scope.task != $scope.numberTasks) {
      $timeout(function() {
        $scope.timer()
      }, 2000);
    }
  }

  $timeout(function() {
    $scope.timer()
  }, 2000);
})