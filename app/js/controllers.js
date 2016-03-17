'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);



phonecatControllers.controller('ProjectListCtrl', ['$scope', '$http',function($scope, $http){
	$http.get('http://localhost:8080/WrappingServer/rest/api/project?userID=3115').success(function(data){
		$scope.projects = data.hits.hits
	
	});
	$scope.orderprop='timeModified';
	}]);
	
phonecatControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams' ,'$http', function($scope, $routeParams, $http){
	$http.get('http://localhost:8080/WrappingServer/rest/api/project/'+$routeParams.projectId).success(function(data){
		$scope.project=data;
	
	});
	
	}]);
	
	
	
	
	




