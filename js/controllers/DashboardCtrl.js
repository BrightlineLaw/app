var DashboardCtrl = angular.module('DashboardCtrl', []);

DashboardCtrl.controller('DashboardController', ['$scope', '$state', function($scope, $state) {
	var vm = this;
	$scope.testMessage = "This is /dashboard";

	// navigation
	$scope.goToProfile = function() {
		$state.go('profile');
	}
	$scope.goToSettings = function() {
		$state.go('settings');
	}
	$scope.goToHelp = function() {
		$state.go('help');
	}
	$scope.logout = function() {
		$state.go('login');
	}

}]);
