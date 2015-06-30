var DashboardCtrl = angular.module('DashboardCtrl', []);

DashboardCtrl.controller('DashboardController', ['$scope', function($scope) {
	var vm = this;
	$scope.testMessage = "Brightline";
}]);
