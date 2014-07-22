'use strict';

var app = angular.module('coffeeApp', []);

	app.controller('CoffeeController', function($scope, $http){
		$scope.master = {};
		
		$scope.grinders = [
            {id:1,name:'Baratza'},
            {id:2,name:'Cuisinart'},
            {id:3,name:'Capresso'},
            {id:4,name:'Bodum'},
            {id:5,name:'Other'}
            ];
            
        $scope.addGrinder = function() {
			var g = $scope.user.addgrinderinput;
			$scope.grinders.push({id:$scope.grinders.length + 1,name:g});
		};
		
		$scope.models = [
            {id:1,name:'1200'},
            {id:2,name:'13000'},
            {id:3,name:'35939'},
            {id:4,name:'953883'},
            {id:5,name:'123'}
            ];
            
        $scope.addModel = function() {
			var m = $scope.user.addmodelinput;
			$scope.models.push({id:$scope.models.length + 1,name:m});
		};
		
		$scope.brewers = [];
		
		$scope.addBrewer = function() {
			var b = $scope.user.addbrewer;
			$scope.brewers.push({name:b});	
		};
		
		$scope.selectBrewer = function(name) {
			console.log("hey, i'm sending you in the " + name);
			var chosenBrewer = name;
		};
		

		$scope.update = function(user) {
			$scope.master = angular.copy(user);		  
			// $http.post('/app/js/update', $scope.master).success("nice!");
		};

		$scope.reset = function() {
		  $scope.user = angular.copy($scope.master);
		};

		$scope.reset();
	});

