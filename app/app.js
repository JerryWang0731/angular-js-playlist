var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/content', {
            templateUrl: 'views/content.html',
            controller: 'ContactController'
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'ContactController'
        })
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

myApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('contact-success');
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


    $scope.removeAll = function(){
        $scope.ninjas = [];
    };
    
}]);
