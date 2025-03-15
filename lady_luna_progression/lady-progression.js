// let todos = await fetch (`http://localhost:3000/get`)
// todos = await todos.json()
// console.log("My To-Dos",todos) // check if the data is being fetched correctly
let todos = [
  { ID: 1, Task: "Task 1", Status: "Incomplete" },
  { ID: 2, Task: "Task 2", Status: "Incomplete" },
  { ID: 3, Task: "Task 3", Status: "Incomplete" },
  { ID: 4, Task: "Task 4", Status: "Incomplete" },
  { ID: 5, Task: "Task 5", Status: "Incomplete" },
  { ID: 6, Task: "Task 6", Status: "Incomplete" },
  { ID: 7, Task: "Task 7", Status: "Incomplete" },
  { ID: 8, Task: "Task 8", Status: "Incomplete" },
  { ID: 9, Task: "Task 9", Status: "Incomplete" },
  { ID: 10, Task: "Task 10", Status: "Incomplete" },
];
angular
  .module("ionicApp", ["ionic"])
  .controller("MainCtrl", function ($scope, $ionicSideMenuDelegate, $timeout) {
    // Change the number of tasks here and in the SCSS
    $scope.tasks = [
        { ID: 1, Task: "Task 1", Status: "Incomplete" },
        { ID: 2, Task: "Task 2", Status: "Incomplete" },
        { ID: 3, Task: "Task 3", Status: "Incomplete" },
        { ID: 4, Task: "Task 4", Status: "Incomplete" },
        { ID: 5, Task: "Task 5", Status: "Incomplete" },
        { ID: 6, Task: "Task 6", Status: "Incomplete" },
        { ID: 7, Task: "Task 7", Status: "Incomplete" },
        { ID: 8, Task: "Task 8", Status: "Incomplete" },
        { ID: 9, Task: "Task 9", Status: "Incomplete" },
        { ID: 10, Task: "Task 10", Status: "Incomplete" },
      ];
    $scope.task = 1;

    $scope.timer = function () {
      $scope.task++;

      if ($scope.task != $scope.tasks) {
        $timeout(function () {
          $scope.timer();
        }, 2000);
      }
    };

    $timeout(function () {
      $scope.timer();
    }, 2000);
  });
