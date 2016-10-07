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

        $scope.$on('dataListMf', function(event, data) {
            $scope.dataList = data;
            $scope.$apply();
        });
	}]);
})(angular);
