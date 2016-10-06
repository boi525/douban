/*
 * @Author: 虚竹
 * @Date:   2016-09-29 09:29:36
 * @Last Modified by:   虚竹
 * @Last Modified time: 2016-09-30 10:47:07
 */

;
(function(angular) {
    'use strict';
    var app = angular.module("renren");
    app.controller('hotController', ['$scope', 'httpService', function($scope, httpService) {
        var pageSize = 10;
        var page = 1;
        var start = pageSize * (page-1);

        $scope.totalPage = 1;
        $scope.currentPage = 1;
        
        $scope.dataList = {};

        $scope.isLoading = true;

        function getMovie(start) {
            var url = "http://api.douban.com/v2/movie/in_theaters";
            httpService.jsonp(url, {
                start:start, 
                count: pageSize
            }, function(data) {
                console.log(data);
                $scope.dataList = data;
                $scope.totalPage = Math.ceil(data.total/pageSize);
                $scope.isLoading = false;
                $scope.$apply();
            }); 
        }
        getMovie(0);

        $scope.goNext = function(currentPage) {
            if(currentPage <= $scope.totalPage) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage++;
            }
        };

        $scope.goPre = function(currentPage) {
            if(currentPage >= 1) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage--;
            }
        };

        // 接受广播数据
        // $scope.$on('dataListMf', function(event, data) {
        //     console.log(data);
        //     $scope.dataList = data;
        //     $scope.totalPage = Math.ceil(data.total/pageSize);
        //     $scope.$apply();
        // });


        // 查看详情功能怎么实现
        // 1. 查看API，豆瓣请求的
        // 2. http://api.douban.com/v2/movie/subject/1764796

    }]);
})(angular);
