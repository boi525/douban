;(function(angular) {
	'use strict';
	var app = angular.module("renren", ['ngRoute']);

	app.controller('MovieSearchController', ['$scope', '$location', 'httpService', function($scope, $location, httpService){
		// 定义jsonp请求的地址
		var url = "http://api.douban.com/v2/movie/search";

		// 1.搜索电影函数
		$scope.searchMovie = function(text) {
			// httpService.jsonp(url, {q:text}, function(data) {
			// 	console.log(data);
			// 	// $scope.$broadcast('dataListMf', data);
			// });
			// 
			// 跳转页面
			$location.path("/search/" + text);
			
		};

		// 2.给页面添加一个输入文本model
		$scope.searchText = '';
	}]);
})(angular);
