var DashboardCtrl = angular.module('DashboardCtrl', []);

DashboardCtrl.controller('DashboardController', ['$scope', '$state', '$mdSidenav', function($scope, $state, $mdSidenav) {
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
	$scope.goToModules = function() {
		$state.go('modules');
	}
	$scope.logout = function() {
		$state.go('login');
	}

	// sidenav
	$scope.openLeftMenu = function() {
	  $mdSidenav('left').toggle();
	}

}]);
