var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('ProjectListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('projects/projects2.json').success(function(data) {
      $scope.projects = data.hits.hits;
    });

    $scope.orderProp = '_source.timeModified';
  }]);

phonecatControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.projectId = $routeParams.projectId;
  }]);