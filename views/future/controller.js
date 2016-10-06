/*
* @Author: 虚竹
* @Date:   2016-09-29 09:29:36
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-30 09:57:27
*/

;(function(angular) {
	'use strict';
	var app = angular.module("renren");
	app.controller('futureController', ['$scope', 'httpService', function($scope, httpService) {
		$scope.dataList = {};
        var url = "http://api.douban.com/v2/movie/coming_soon";
        httpService.jsonp(url, {}, function(data) {
            console.log(data);
            $scope.dataList = data;
            $scope.$apply();
        });

        // 接受广播数据
        $scope.$on('dataListMf', function(event, data) {
            $scope.dataList = data;
            $scope.$apply();
        });
	}]);
})(angular);
