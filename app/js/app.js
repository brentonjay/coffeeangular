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
		
		$scope.brewerchoice;
		
		$scope.selectBrewer = function(name) {
			$scope.brewerchoice = name;
		};
		
		$scope.brewprofiles = [];
		
		$scope.addBrewProfile = function(user, brewerchoice) {
			var g = $scope.user.grinder.name;
			var m = $scope.user.model.name;
			var c = $scope.brewerchoice;
			$scope.brewprofiles.push({profile:$scope.brewprofiles.length + 1,grinder:g,model:m,brewer:c});			
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

var timer = angular.module('timerApp', []);
		timer.controller("TimerController", function($scope,$timeout){
			$scope.pressVal = 0;
			$scope.timerVal = ($scope.bloomVal + $scope.brewVal + $scope.pressVal);
			var stopped;
			// $scope.timer;
 
			$scope.countdown = function() {
				stopped = $timeout(function() {
					console.log($scope.counter);
					$scope.counter--;   
					$scope.countdown();   
				}, 1000);
			};
 
			$scope.loadVals = function() {
				$scope.timer = ($scope.bloomVal + $scope.brewVal + $scope.pressVal);				
			};
   
			$scope.countdownInput = function() {
				stopped = $timeout(function() {
					console.log($scope.timer);
					$scope.timer--;   
					$scope.countdownInput();   
				}, 1000);
			};   
    
			$scope.stop = function() {
				$timeout.cancel(stopped);
			} 
		});
