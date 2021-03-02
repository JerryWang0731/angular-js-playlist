var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'MyController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);

myApp.controller('MyController', ['$scope', function($scope){
    $scope.search = "";
    $scope.orderBy = "";


    $scope.removeMember = function(member){
        const rmMemberIdx = $scope.ninjas.indexOf(member);

        if (rmMemberIdx > -1) {
            $scope.ninjas.splice(rmMemberIdx, 1);
        }
    };

    $scope.ninjas = [
        { thumb: '' ,name: 'Aerry', belt: 'red', rate: 10, available: true},
        { thumb: '' ,name: 'Jerry', belt: 'blue', rate: 10, available: true},
        { thumb: './content/img/luich.jpg' ,name: 'luich', belt: 'green', rate: 150, available: true},
        { thumb: './content/img/yoshi.jpg' ,name: 'yoshi', belt: 'green', rate: 250, available: true},
        { thumb: './content/img/Mario.jpg' ,name: 'Mario', belt: 'red', rate: 20, available: true},
        { thumb: '' ,name: 'Makyo', belt: 'gray', rate: 20, available: false},
    ]; 

    $scope.addMember = function()
    {
        $scope.ninjas.push({
            name: $scope.newMember.name,
            belt: $scope.newMember.belt,
            rate: parseInt($scope.newMember.rate),
            available: true
        });
    };
    
}]);
