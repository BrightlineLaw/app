var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileController', ['$scope', '$state', function($scope, $state) {
	var vm = this;
	$scope.testMessage = "This is /profile";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}

}])