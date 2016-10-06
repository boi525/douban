/*
* @Author: 虚竹
* @Date:   2016-09-29 14:41:03
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-29 15:58:21
*/

(function(angular) {
    'use strict';
    var app = angular.module("renren");
    app.service('httpService', [function() {
        this.jsonp = function(url, data, fn) {
			function getData(data) {
				fn(data);
				document.body.removeChild(script);
			}

			window['getData'] = getData;

			// 处理data数据
			var searchData = '?';
			
			// if(!data) {
			// 	console.log(data == true);
			// 	searchData = "?" + JSON.stringify(data);
			// }else {
			// 	searchData = "?";
			// }
			for(var i in data) {
				searchData += i + "=" + data[i] + "&";
			}
			
			// 1. 创建script标签
			var script = document.createElement("script");
			// 2. 加入callback = 
			script.src = url + searchData + "callback=getData";
			console.log(script.src);
			// 3. 插入标签
			document.body.appendChild(script);
		}
    }]);
})(angular);
