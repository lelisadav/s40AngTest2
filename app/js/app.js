'use strict';

/* App Module */

var phonecatApp= angular.module('phonecatApp', [
	'ngRoute', 'phonecatControllers', 'phonecatFilters']



);

phonecatApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/projects', 
		{
			templateUrl: 'partials/project-list.html',
			controller: 'ProjectListCtrl'
		}).when('/projects/:projectId', {
			templateUrl: 'partials/project-detail.html',
			controller: 'ProjectDetailCtrl'
		}).when('/home', {
			templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
		}).when('/groups',
		{
			templateUrl: 'partials/group-list.html',
			controller: 'GroupListCtrl'
		})
		
		
		
		
		.otherwise({
			redirectTo: '/home'
		});
		}]);
		
	