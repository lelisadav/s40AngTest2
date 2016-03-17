'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('LoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.Login=function(userid){
		$http.get('http://localhost:8080/WrappingServer/rest/api/person/'+userid).success(function(data){
			
			
		$scope.loginresponse = data
		
		if ($scope.loginresponse.found){
			
			$location.path('/projects');
			
		}
	});
		
		
	}
	
	}]);

phonecatControllers.controller('ProjectListCtrl', ['$scope', '$http',function($scope, $http){

	$http.get('http://localhost:8080/WrappingServer/rest/api/project?show_hidden=true').success(function(data){
		$scope.projects = data.hits.hits
	
	});
	$scope.orderprop='timeModified';
	}]);

	phonecatControllers.controller('GroupListCtrl', ['$scope', '$http',function($scope, $http){
		
	$http.get('http://localhost:8080/WrappingServer/rest/api/group?projectID='+$scope.project._id+'&show_hidden=true').success(function(data){
		$scope.groups = data.hits.hits
	
	});
	$scope.orderprop='timeModified';
	}]);
	
phonecatControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams' ,'$http', function($scope, $routeParams, $http){
	$http.get('http://localhost:8080/WrappingServer/rest/api/project/'+$routeParams.projectId).success(function(data){
		$scope.project=data;
	
	});
	
	}]);
	
	
	
	
	




