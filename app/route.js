;(function(angular) {
	'use strict';
	var app = angular.module("renren");
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/hot', {
			templateUrl: '../views/hot/view.html',
			controller: 'hotController'
		}).when('/future', {
			templateUrl: '../views/future/view.html',
			controller: 'futureController'
		}).when('/top', {
			templateUrl: '../views/top/view.html',
			controller: 'topController'
		}).when('/search/:text', {
			templateUrl: '../views/search/view.html',
			controller: 'searchController'
		}).when('/subject/:id', {
			templateUrl: '../views/detail/view.html',
			controller: 'detailController'
		}).otherwise({
			redirectTo: '/hot'
		});
	}]);
})(angular);