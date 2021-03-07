var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MyController'
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'MyController'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);

myApp.directive('randomNinja', [function(){
    return {
        restrict: 'E',
        scope: {
            ninjas: '=',
            title: '=',
        },
        transclude: true,
        replace: true,
        templateUrl: 'views/random.html',
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 6)
        }
    }; 
}]);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http){
    $scope.search = "";
    $scope.orderBy = "";

    $scope.removeMember = function(member){
        const rmMemberIdx = $scope.ninjas.indexOf(member);

        if (rmMemberIdx > -1) {
            $scope.ninjas.splice(rmMemberIdx, 1);
        }
    };

    $scope.addMember = function()
    {
        $scope.ninjas.push({
            name: $scope.newMember.name,
            belt: $scope.newMember.belt,
            rate: parseInt($scope.newMember.rate),
            available: true
        });
    };

    $http.get('data/members.json').success(function(data){
        $scope.ninjas = data;
    });

    const temp = angular.toJson($scope.ninjas);
    console.log(temp);
    
}]);
