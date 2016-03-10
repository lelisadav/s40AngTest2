'use strict';

/* Controllers */

var phonecatApp= angular.module('phonecatApp', []);

phonecatApp.controller('ProjectListCtrl', function($scope, $http){
	$http.get('projects2.json').success(function(data){
		$scope.projects = data.hits.hits;
	
	});
	$scope.orderProp='timeModified';
	});
	
	
	
	




