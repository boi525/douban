/*
 * @Author: 虚竹
 * @Date:   2016-09-29 09:29:36
 * @Last Modified by:   虚竹
 * @Last Modified time: 2016-10-07 15:13:05
 */

;
(function(angular) {
    'use strict';
    var app = angular.module("renren");
    app.controller('searchController', ['$scope', '$routeParams', 'httpService',  function($scope, $routeParams, httpService) {
        console.log("1s sddf");
        var pageSize = 10;
        var page = 1;
        var start = pageSize * (page-1);

        $scope.totalPage = 1;
        $scope.currentPage = 1;
        
        $scope.dataList = {};

        $scope.isLoading = true;

        function getMovie(start, text) {
            var url = "http://api.douban.com/v2/movie/search";
            httpService.jsonp(url, {
                start:start, 
                count: pageSize,
                q:text
            }, function(data) {
                console.log(data);
                $scope.dataList = data;
                $scope.totalPage = Math.ceil(data.total/pageSize);
                $scope.isLoading = false;
                $scope.$apply();
            }); 
        }
        getMovie(0, $routeParams.text);

        $scope.goNext = function(currentPage) {
            if(currentPage <= $scope.totalPage) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start, $routeParams.text);
                $scope.currentPage++;
            }
        };

        $scope.goPre = function(currentPage) {
            if(currentPage >= 1) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start, $routeParams.text);
                $scope.currentPage--;
            }
        };
    }]);
})(angular);
