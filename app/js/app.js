"use strict";

var app = angular.module("coffeeApp", ["ngRoute", "ui.bootstrap", "app.controllers", "app.other-controllers"]);

	// nothing but routing for the next little bit
	app.config(["$routeProvider", function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "app/partials/landing.html",
				controller  : "landingCtrl"
			})
			.when("/almostready", {
				templateUrl : "app/partials/almostready.html",
				controller  : "almostreadyController"
			})
			.when("/signin", {
				templateUrl : "app/partials/signin.html",
				controller  : "signinController"
			})
			.when("/signup", {
				templateUrl : "app/partials/signup.html",
				controller  : "signupController"
			})
			.when("/addgear", {
				templateUrl : "app/partials/addgear.html",
				controller  : "addgearController"
			})
			.when("/addbeans", {
				templateUrl : "app/partials/addbeans.html",
				controller  : "addbeansController"
			})
			.when("/ready", {
				templateUrl : "app/partials/ready.html",
				controller  : "readyController"
			})
			.when("/set", {
				templateUrl : "app/partials/set.html",
				controller  : "setController"
			})
			.when("/brew", {
				templateUrl : "app/partials/brew.html",
				controller  : "brewController"
			})
			.when("/log", {
				templateUrl : "app/partials/log.html",
				controller  : "logController"
			})			
			.when("/profile", {
				templateUrl : "app/partials/profile.html",
				controller  : "profileController"
			})			
			.when("/explore", {
				templateUrl : "app/partials/explore.html",
				controller  : "exploreController"
			})
			.otherwise("/", {
				templateUrl : "app/partials/landing.html",
				controller 	: "landingCtrl"
			});
	}]);	
	// end routing
