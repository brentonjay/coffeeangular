'use strict';

	var appOtherControllers = angular.module('app.other-controllers', []);

	// this is the controller for the "add gear" page, pretty much.
	appOtherControllers.controller("CoffeeController", function($scope, $http){
		// this is the angularui accordion technique - it"s to keep the first accordion open
		$scope.accordionStatus = {
			isFirstOpen: true,
			isFirstDisabled: false
		};
		
		// opens the 'add new grinder' input
		$scope.grinderBlock = true;
		
		$scope.master = {};
		
		$scope.brewers = [];
		
		$scope.grinders = [
            {
				id:1,
				name:"Baratza",
				models:	[
					{
						model_id:1,
						name:"Baratza1200b"
					},
					{
						model_id:2,
						name:"Baratza13000b"
					},
					{
						model_id:3,
						name:"Baratza35939b"
					},
					{
						model_id:4,
						name:"Baratza953883b"
					},
					{
						model_id:5,
						name:"Baratza123b"
					}
				]
			},
            {	
				id:2,
				name:"Cuisinart",
				models:	[
					{
						model_id:1,
						name:"Cuisinart1200b"
					},
					{
						model_id:2,
						name:"Cuisinart13000b"
					},
					{
						model_id:3,
						name:"Cuisinart35939b"
					},
					{
						model_id:4,
						name:"Cuisinart953883b"
					},
					{
						model_id:5,
						name:"Cuisinart123b"
					}
				]
			},
            {
				id:3,
				name:"Capresso",
				models:	[
					{
						model_id:1,
						name:"Capresso1200b"
					},
					{
						model_id:2,
						name:"Capresso13000b"
					},
					{
						model_id:3,
						name:"Capresso35939b"
					},
					{
						model_id:4,
						name:"Capresso953883b"
					},
					{
						model_id:5,
						name:"1Capresso23b"
					}
				]
			},
            {
				id:4,
				name:"Bodum",
				models:	[
					{
						model_id:1,
						name:"Bodum1200b"
					},
					{
						model_id:2,
						name:"Bodum13000b"
					},
					{
						model_id:3,
						name:"Bodum35939b"
					},
					{
						model_id:4,
						name:"Bodum953883b"
					},
					{
						model_id:5,
						name:"Bodum123b"
					}
				]
			},
            {
				id:5,
				name:"Bunn",
				models:	[
					{
						model_id:1,
						name:"Bunn1200b"
					},
					{
						model_id:2,
						name:"Bunn13000b"
					},
					{
						model_id:3,
						name:"Bunn35939b"
					},
					{
						model_id:4,
						name:"Bunn953883b"
					},
					{
						model_id:5,
						name:"Bunn123b"
					}
				]
			},
            {
				id:6,
				name:"Black and Decker",
				models:	[
					{
						model_id:1,
						name:"Black1200b"
					},
					{
						model_id:2,
						name:"Black13000b"
					},
					{
						model_id:3,
						name:"Black35939b"
					},
					{
						model_id:4,
						name:"Black953883b"
					},
					{
						model_id:5,
						name:"Black123b"
					}
				]
			},
            {
				id:7,
				name:"Krups",
				models:	[
					{
						model_id:1,
						name:"Krups1200b"
					},
					{
						model_id:2,
						name:"Krups13000b"
					},
					{
						model_id:3,
						name:"Krups35939b"
					},
					{
						model_id:4,
						name:"Krups953883b"
					},
					{
						model_id:5,
						name:"Krups123b"
					}
				]
			},
            {
				id:8,
				name:"Hario",
				models:	[
					{
						model_id:1,
						name:"Hario1200b"
					},
					{
						model_id:2,
						name:"Hario13000b"
					},
					{
						model_id:3,
						name:"Hario35939b"
					},
					{
						model_id:4,
						name:"Hario953883b"
					},
					{
						model_id:5,
						name:"Hario123b"
					}
				]
			},
            {
				id:9,
				name:"Hamilton Beach",
				models:	[
					{
						model_id:1,
						name:"Hamilton Beach1200b"
					},
					{
						model_id:2,
						name:"Hamilton Beach13000b"
					},
					{
						model_id:3,
						name:"Hamilton Beach35939b"
					},
					{
						model_id:4,
						name:"Hamilton Beach953883b"
					},
					{
						model_id:5,
						name:"Hamilton Beach123b"
					}
				]
			},
            {
				id:10,
				name:"Breville",
				models:	[
					{
						model_id:1,
						name:"Breville1200b"
					},
					{
						model_id:2,
						name:"Breville13000b"
					},
					{
						model_id:3,
						name:"Breville35939b"
					},
					{
						model_id:4,
						name:"Breville953883b"
					},
					{
						model_id:5,
						name:"Breville123b"
					}
				]
			}
		];
            
        $scope.addGrinder = function() {
			var g = $scope.user.addgrinderinput;
			$scope.grinders.push({id:$scope.grinders.length + 1,name:g});
		};
		
		$scope.selectGrinder = function($item, $model, $label) {
			$scope.$item = $item;
			$scope.$model = $model;
			$scope.$label = $label;
			console.log("ITEM = " + $item + "MODEL = " + $model + "LABEL = " + $label);
			// console.log($model);
			
			// where were you when you stopped working? well, you were just discovering how to get to the callback method with the typeahead box, which is good. congrats on that! you thought maybe what you could do on the typeahead was to loop through the array of existing grinders, looking for the $label, and comparing that to what's in the input box. if you find it, cool, if not, present the option to add that grinder to the list. took you long enough, though, you know what i mean?
		};
		
		// this function makes sure only one grinder is checked at a time
		$scope.grinderCheck = function(grinder) {
			angular.forEach($scope.grinders, function(item) {
				item.checked = false;
			});
			grinder.checked = true;
		};
		
		$scope.models = [
            {id:1,name:"1200"},
            {id:2,name:"13000"},
            {id:3,name:"35939"},
            {id:4,name:"953883"},
            {id:5,name:"123"}
		];
            
        $scope.addModel = function() {
			var m = $scope.user.addmodelinput;
			$scope.models.push({id:$scope.models.length + 1,name:m});
		};
		
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
			// $http.post("/app/js/update", $scope.master).success("nice!");
		};

		$scope.reset = function() {
			$scope.user = angular.copy($scope.master);
		};

		$scope.reset();
	});
	
	
	
	
	// this is the controller for the "add bean" page
	appOtherControllers.controller("BeanController", function($scope, $http){
		$scope.roaster = [
            {id:1,name:"Counter Culture"},
            {id:2,name:"Stumptown"},
            {id:3,name:"Sump Coffee"},
            {id:4,name:"Oak City Coffee Roasters"},
            {id:5,name:"Other"}
        ];            
                        
        $scope.addRoaster = function() {
			var r = $scope.user.addroasterinput;
			$scope.roaster.push({id:$scope.roaster.length + 1,name:r});
		};
		
		$scope.coffeeVariety = [
            {id:1,name:"Uganda St. Goret"},
            {id:2,name:"Finca El Puente"},
            {id:3,name:"Ethiopia Yirga Cheffe Olke Birre"},
            {id:4,name:"Ethiopia Yirga Cheffe Elias Benata"}
		];
		            
        $scope.addCoffeeVariety = function() {
			var v = $scope.user.addcoffeevarietyinput;
			$scope.coffeeVariety.push({id:$scope.coffeeVariety.length + 1,name:v});
		};
		
		$scope.roastDate = [];
		
		$scope.addRoastDate = function() {
			var d = $scope.user.addroastdateinput;
			$scope.roastDate.push({name:d});
		};
		
		
	});



	// this is the controller for the "brew" page, which has the timer on it
	appOtherControllers.controller("TimerController", function($scope, $timeout) {
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
	


	// this is the custom typeahead using angular-ui. it"s seriously bitchin".
	appOtherControllers.controller("TypeaheadController", function($scope, $http) {

		$scope.selected = undefined;
		$scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
		// Any function returning a promise object can be used to load values asynchronously
		$scope.getLocation = function(val) {
			return $http.get("http://maps.googleapis.com/maps/api/geocode/json", {
				params: {
					address: val,
					sensor: false
				}
			}).then(function(res){
				var addresses = [];
				angular.forEach(res.data.results, function(item){
					addresses.push(item.formatted_address);
				});
				return addresses;
				});
			};

			$scope.statesWithFlags = [{"name":"Alabama","flag":"5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png"},{"name":"Alaska","flag":"e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png"},{"name":"Arizona","flag":"9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png"},{"name":"Arkansas","flag":"9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png"},{"name":"California","flag":"0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png"},{"name":"Colorado","flag":"4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png"},{"name":"Connecticut","flag":"9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png"},{"name":"Delaware","flag":"c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png"},{"name":"Florida","flag":"f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png"},{"name":"Georgia","flag":"5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png"},{"name":"Hawaii","flag":"e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png"},{"name":"Idaho","flag":"a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png"},{"name":"Illinois","flag":"0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png"},{"name":"Indiana","flag":"a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png"},{"name":"Iowa","flag":"a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png"},{"name":"Kansas","flag":"d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png"},{"name":"Kentucky","flag":"8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png"},{"name":"Louisiana","flag":"e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png"},{"name":"Maine","flag":"3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png"},{"name":"Maryland","flag":"a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png"},{"name":"Massachusetts","flag":"f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png"},{"name":"Michigan","flag":"b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png"},{"name":"Minnesota","flag":"b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png"},{"name":"Mississippi","flag":"4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png"},{"name":"Missouri","flag":"5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png"},{"name":"Montana","flag":"c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png"},{"name":"Nebraska","flag":"4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png"},{"name":"Nevada","flag":"f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png"},{"name":"New Hampshire","flag":"2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png"},{"name":"New Jersey","flag":"9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png"},{"name":"New Mexico","flag":"c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png"},{"name":"New York","flag":"1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png"},{"name":"North Carolina","flag":"b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png"},{"name":"North Dakota","flag":"e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png"},{"name":"Ohio","flag":"4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png"},{"name":"Oklahoma","flag":"6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png"},{"name":"Oregon","flag":"b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png"},{"name":"Pennsylvania","flag":"f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png"},{"name":"Rhode Island","flag":"f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png"},{"name":"South Carolina","flag":"6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png"},{"name":"South Dakota","flag":"1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png"},{"name":"Tennessee","flag":"9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png"},{"name":"Texas","flag":"f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png"},{"name":"Utah","flag":"f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png"},{"name":"Vermont","flag":"4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png"},{"name":"Virginia","flag":"4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png"},{"name":"Washington","flag":"5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png"},{"name":"West Virginia","flag":"2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png"},{"name":"Wisconsin","flag":"2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png"},{"name":"Wyoming","flag":"b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png"}];
		})

