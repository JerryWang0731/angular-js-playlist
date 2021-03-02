var myApp = angular.module('myApp', []);

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
        { name: 'Aerry', belt: 'red', rate: 10, available: true},
        { name: 'Jerry', belt: 'blue', rate: 10, available: true},
        { name: 'Dasu', belt: 'red', rate: 150, available: true},
        { name: 'Sici', belt: 'green', rate: 250, available: true},
        { name: 'Mario', belt: 'yellow', rate: 20, available: true},
        { name: 'Makyo', belt: 'gray', rate: 20, available: false},
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
