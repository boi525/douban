;(function(angular) {
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
    }]);
})(angular);
