'use strict';

/* Controllers */

	var appControllers = angular.module('app.controllers', []);
	
		appControllers.controller("landingCtrl", ['$scope', function($scope){
			$scope.thing = "this is a landingController thing";
		}]);	
		appControllers.controller("almostreadyController", function($scope){
			$scope.thing = "this is an almostreadyController thing";
		});	
		appControllers.controller("signinController", function($scope){
			$scope.thing = "this is a signinController thing";
		});	
		appControllers.controller("signupController", function($scope){
			$scope.thing = "this is a signupController thing";
		});	
		appControllers.controller("addgearController", function($scope){
			$scope.thing = "this is an addgearController thing";
		});	
		appControllers.controller("addbeansController", function($scope){
			$scope.thing = "this is an addgearController thing";
		});	
		appControllers.controller("readyController", function($scope){
			$scope.thing = "this is an readyController thing";
		});	
		appControllers.controller("setController", function($scope){
			$scope.thing = "this is an setController thing";
		});	
		appControllers.controller("brewController", function($scope){
			$scope.thing = "this is an brewController thing";
		});	
		appControllers.controller("logController", function($scope){
			$scope.thing = "this is an logController thing";
		});	
		appControllers.controller("profileController", function($scope){
			$scope.thing = "this is an profileController thing";
		});	
		appControllers.controller("exploreController", function($scope){
			$scope.thing = "this is an exploreController thing";
		});	
