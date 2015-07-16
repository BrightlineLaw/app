var ModulesCtrl = angular.module('ModulesCtrl', []);

ModulesCtrl.controller('ModulesController', ['$scope', '$state', '$mdSidenav', function($scope, $state, $mdSidenav){
	var vm = this;
	$scope.testMessage = "This is /modules";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}
	$scope.logout = function() {
		$state.go('login');
	}

	// sidenav
	$scope.openLeftMenu = function() {
	  $mdSidenav('left').toggle();
	}

}])