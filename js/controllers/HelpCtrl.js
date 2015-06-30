var HelpCtrl = angular.module('HelpCtrl', []);

HelpCtrl.controller('HelpController', ['$scope', '$state', function($scope, $state) {
	var vm = this;
	$scope.testMessage = "This is /help";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}

}])