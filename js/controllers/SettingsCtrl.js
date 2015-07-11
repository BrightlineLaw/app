var SettingsCtrl = angular.module('SettingsCtrl', []);

SettingsCtrl.controller('SettingsController', ['$scope', '$state', '$mdSidenav', function($scope, $state, $mdSidenav) {
	var vm = this;
	$scope.testMessage = "This is /settings";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}

	// sidenav
	$scope.openLeftMenu = function() {
	  $mdSidenav('left').toggle();
	};

}])