var LoginCtrl = angular.module('LoginCtrl', []);

LoginCtrl.controller('LoginController', ['$scope', '$state', function($scope, $state) {
	var vm = this;
	$scope.testMessage = "This is /login";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}

}]);
