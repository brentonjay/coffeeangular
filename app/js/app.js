var app = angular.module('coffeeApp', ['ngRoute']);

	// nothing but routing for the next little bit
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'app/partials/landing.html',
				controller  : 'landingController'
			})
			.when('/almostready', {
				templateUrl : 'app/partials/almostready.html',
				controller  : 'almostreadyController'
			})
			.when('/signin', {
				templateUrl : 'app/partials/signin.html',
				controller  : 'signinController'
			})
			.when('/signup', {
				templateUrl : 'app/partials/signup.html',
				controller  : 'signupController'
			})
			.when('/addgear', {
				templateUrl : 'app/partials/addgear.html',
				controller  : 'addgearController'
			})
			.when('/addbeans', {
				templateUrl : 'app/partials/addbeans.html',
				controller  : 'addbeansController'
			})
			.when('/ready', {
				templateUrl : 'app/partials/ready.html',
				controller  : 'readyController'
			})
			.when('/set', {
				templateUrl : 'app/partials/set.html',
				controller  : 'setController'
			})
			.when('/brew', {
				templateUrl : 'app/partials/brew.html',
				controller  : 'brewController'
			})
			.when('/log', {
				templateUrl : 'app/partials/log.html',
				controller  : 'logController'
			})			
			.when('/profile', {
				templateUrl : 'app/partials/profile.html',
				controller  : 'profileController'
			})			
			.when('/explore', {
				templateUrl : 'app/partials/explore.html',
				controller  : 'exploreController'
			})
			.otherwise('/', {
				templateUrl : 'app/partials/landing.html',
				controller 	: 'landingController'
			});
	});
	
	app.controller('landingController', function($scope){
		$scope.thing = 'this is a landingController thing';
	});	
	app.controller('almostreadyController', function($scope){
		$scope.thing = 'this is an almostreadyController thing';
	});	
	app.controller('signinController', function($scope){
		$scope.thing = 'this is a signinController thing';
	});	
	app.controller('signupController', function($scope){
		$scope.thing = 'this is a signupController thing';
	});	
	app.controller('addgearController', function($scope){
		$scope.thing = 'this is an addgearController thing';
	});	
	app.controller('addbeansController', function($scope){
		$scope.thing = 'this is an addgearController thing';
	});	
	app.controller('readyController', function($scope){
		$scope.thing = 'this is an readyController thing';
	});	
	app.controller('setController', function($scope){
		$scope.thing = 'this is an setController thing';
	});	
	app.controller('brewController', function($scope){
		$scope.thing = 'this is an brewController thing';
	});	
	app.controller('logController', function($scope){
		$scope.thing = 'this is an logController thing';
	});	
	app.controller('profileController', function($scope){
		$scope.thing = 'this is an profileController thing';
	});	
	app.controller('exploreController', function($scope){
		$scope.thing = 'this is an exploreController thing';
	});	
	// end routing
	

	// this is the controller for the "add gear" page, pretty much.
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
	
	
	// this is the controller for the "add bean" page
	app.controller('BeanController', function($scope, $http){
		$scope.roaster = [
            {id:1,name:'Counter Culture'},
            {id:2,name:'Stumptown'},
            {id:3,name:'Sump Coffee'},
            {id:4,name:'Oak City Coffee Roasters'}
        ];            
                        
        $scope.addRoaster = function() {
			var r = $scope.user.addroasterinput;
			$scope.roaster.push({id:$scope.roaster.length + 1,name:r});
		};
		
		$scope.variety = [];
	});



	// this is the controller for the "brew" page, which has the timer on it
	app.controller("TimerController", function($scope,$timeout) {
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
