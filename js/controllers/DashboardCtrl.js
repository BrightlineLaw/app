var DashboardCtrl = angular.module('DashboardCtrl', []);

DashboardCtrl.controller('DashboardController', ['$scope', '$state', function($scope, $state) {
	var vm = this;
	$scope.testMessage = "This is /dashboard";

	$scope.profile = function() {
		console.log("###")
		$state.go('profile');
	}

}]);
