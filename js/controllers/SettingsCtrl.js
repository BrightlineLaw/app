var SettingsCtrl = angular.module('SettingsCtrl', []);

SettingsCtrl.controller('SettingsController', ['$scope', '$state', function($scope, $state) {
	var vm = this;
	$scope.testMessage = "This is /settings";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}

}])