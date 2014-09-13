var app = angular.module('coffeeApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'app/partials/landing.html',
				controller  : 'landingController'
			})
			.when('/signin', {
				templateUrl : 'app/partials/signin.html',
				controller  : 'signinController'
			})
			.when('/addgear', {
				templateUrl : 'app/partials/addgear.html',
				controller  : 'addgearController'
			})
			.when('/almostready', {
				templateUrl : 'app/partials/almostready.html',
				controller  : 'almostreadyController'
			})
			.otherwise('/', {
				templateUrl : 'app/partials/landing.html',
				controller 	: 'landingController'
			});
	});
	
	app.controller('landingController', function($scope){
		$scope.thing = 'this is a landing thing';
	});
	
	app.controller('signinController', function($scope){
		$scope.thing = 'this is a signin thing';
	});
	
	app.controller('addgearController', function($scope){
		$scope.thing = 'this is an addgear thing';
	});
	
	app.controller('almostreadyController', function($scope){
		$scope.thing = 'this is an addgear thing';
	});
	

	app.controller('CoffeeController', function($scope, $http){
		$scope.master = {};
		
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
		timer.controller("TimerController", function($scope,$timeout) {
			$scope.bloomVal = 0;
			$scope.brewVal = 0;
			$scope.pressVal = 0;
			var stopped;
			var totalTime;			
			
			$scope.timerVal = function() {
				var totalTime = ($scope.bloomVal + $scope.brewVal + $scope.pressVal);
				return totalTime;
			};

			$scope.submitForm = function(isValid) {
				if (isValid) {
					$scope.timer = ($scope.bloomVal + $scope.brewVal + $scope.pressVal);	
					$scope.bloomPerc = (($scope.bloomVal) / ($scope.timer) * 100);			
					$scope.brewPerc = (($scope.brewVal) / ($scope.timer) * 100);			
					$scope.pressPerc = (($scope.pressVal) / ($scope.timer) * 100);	
				}
				else {
				};
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
			}; 
			
			$scope.reset = function() {
				$scope.bloomVal = 0;
				$scope.brewVal = 0;
				$scope.pressVal = 0;
				$scope.brewprep.$setPristine();
			};
		});
