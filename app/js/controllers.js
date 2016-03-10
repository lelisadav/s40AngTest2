var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('ProjectListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('projects/projects2.json').success(function(data) {
      $scope.projects = data.hits.hits;
    });

    $scope.orderProp = '_source.timeModified';
  }]);

phonecatControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
  $http.get('projects/'+$routeParams.projectId+'.json').success(function(data){
	$scope.project=data;
  
  });
   
  }]);