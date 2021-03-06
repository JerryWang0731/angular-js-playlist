var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.controller('CurrentTimeController', [
  '$scope',
  function ($scope) {
    $scope.format = 'M/d/yy h:mm:ss a';
  },
]);

myApp.directive('myCurrentTime', [
  '$interval',
  'dateFilter',
  function ($interval, dateFilter) {
    return {
      link: link,
    };
    function link(scope, element, attrs) {
      var format, timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), format));
      }

      scope.$watch(attrs.myCurrentTime, function (value) {
        format = value;
        updateTime();
      });

      element.on('$destroy', function () {
        $interval.cancel(timeoutId);
      });

      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function () {
        updateTime(); // update DOM
      }, 1000);
    }
  },
]);

myApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
      })
      .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController',
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MyController',
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'MyController',
      })
      .otherwise({
        redirectTo: '/home',
      });
  },
]);

myApp.directive('randomNinja', [
  function () {
    return {
      restrict: 'E',
      scope: {
        ninjas: '=',
        title: '=',
      },
      transclude: true,
      replace: true,
      templateUrl: 'views/random.html',
      controller: function ($scope) {
        $scope.random = Math.floor(Math.random() * 6);
      },
    };
  },
]);

myApp.controller('ContactController', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.sendMessage = function () {
      $location.path('contact-success');
    };

    $scope.duplicate = 'duplicateContact';
  },
]);

myApp.controller('MyController', [
  '$rootScope',
  '$scope',
  '$http',
  function ($rootScope, $scope, $http) {
    var rs = $rootScope;

    var nS = rs.$new();
    nS.AdminName = 'AdminMySon';
    //rs.AdminName = "AdminMy";
    //$scope.AdminName = "MyAdminMy";

    $scope.poMessage = function () {
      window.open('other.html', 'new ninja');
    };

    $scope.duplicate = 'duplicateMy';
    $scope.selected = '';
    $scope.rockers = [
      {
        id: 1,
        label: 'aLabel',
        subItem: { name: 'aSubItem' },
      },
      {
        id: 2,
        label: 'bLabel2',
        subItem: { name: 'bSubItem2' },
      },
      {
        id: 3,
        label: 'bLabel3',
        subItem: { name: 'bSubItem3' },
      },
      {
        id: 4,
        label: 'bLabel4',
        subItem: { name: 'bSubItem4' },
      },
    ];

    $scope.search = '';
    $scope.orderBy = '';

    $scope.removeMember = function (member) {
      const rmMemberIdx = $scope.ninjas.indexOf(member);

      if (rmMemberIdx > -1) {
        $scope.ninjas.splice(rmMemberIdx, 1);
      }
    };

    $scope.addMember = function () {
      $scope.ninjas.push({
        name: $scope.newMember.name,
        belt: $scope.newMember.belt,
        rate: parseInt($scope.newMember.rate),
        available: true,
      });
    };

    $http.get('data/members.json').success(function (data) {
      $scope.ninjas = data;
    });

    const temp = angular.toJson($scope.ninjas);
    console.log(temp);

    $scope.removeAll = function () {
      $scope.ninjas = [];
    };
  },
]);
