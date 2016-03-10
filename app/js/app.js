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
		}).otherwise({
			redirectTo: '/projects'
		});
		}]);
		
	