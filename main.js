// create angular app
	var validationApp = angular.module('validationApp', []);

	validationApp.controller('mainController', function($scope) {
			
		$scope.submitForm = function() {

			if ($scope.userForm.$valid) {
				
			}

		};

		$scope.cancel=function(){
			user.name="";
			$scope.valueSel=0;
		}
		$scope.vals=[{val:0,name:"select"},{val:1,name:"aa"},{val:2,name:"bb"}];
		$scope.valueSel=1;
	});