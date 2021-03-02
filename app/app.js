var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', function($scope){
    $scope.search = "";

    $scope.ninjas = [
        { name: 'Jerry', belt: 'blue', rate: 50, available: true},
        { name: 'Dasu', belt: 'red', rate: 150, available: true},
        { name: 'Sici', belt: 'green', rate: 250, available: true},
        { name: 'Mario', belt: 'yello', rate: 250, available: true},
        { name: 'Makyo', belt: 'gray', rate: 50, available: false},
    ]; 
    
}]);
