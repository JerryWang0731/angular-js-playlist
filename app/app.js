var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', function($scope){
    $scope.greet = "hello due";
}]);
