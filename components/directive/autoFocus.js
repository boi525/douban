/*
* @Author: 虚竹
* @Date:   2016-09-29 14:41:03
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-29 15:38:36
*/

(function(angular) {
    'use strict';
    var app = angular.module("renren");
    app.directive('autoFocus', function() {
    	return {
    		restrict: "EA",
    		link: function(scope, element, attr) {
    			element.on('click', function() {
    				console.log(element);
    				element.parent().children().attr('class', '');
    				element.addClass('active');
    			});
    		}
    	}
    });
})(angular);
