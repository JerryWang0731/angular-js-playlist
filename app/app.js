var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', function($scope){
    $scope.search = "";
    $scope.orderBy = "";

    $scope.ninjas = [
        { name: 'Aerry', belt: 'red', rate: 10, available: true},
        { name: 'Jerry', belt: 'blue', rate: 10, available: true},
        { name: 'Dasu', belt: 'red', rate: 150, available: true},
        { name: 'Sici', belt: 'green', rate: 250, available: true},
        { name: 'Mario', belt: 'yello', rate: 20, available: true},
        { name: 'Makyo', belt: 'gray', rate: 20, available: false},
    ]; 
    
}]);
