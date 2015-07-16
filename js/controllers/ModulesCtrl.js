var ModulesCtrl = angular.module('ModulesCtrl', []);

ModulesCtrl.controller('ModulesController', ['$scope', '$state', function($scope, $state){
	var vm = this;
	$scope.testMessage = "This is /modules";

	// navigation
	$scope.goToDashboard = function() {
		$state.go('dashboard');
	}

}])