const appModule = angular.module('myAppModule', []);

appModule.controller('myController', function($scope){
  $scope.message = 'Hello World';
});
