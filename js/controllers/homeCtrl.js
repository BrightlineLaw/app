var homeCtrl = angular.module('homeCtrl', []);

homeCtrl.controller('HomeController', ['$scope', function($scope) {
	var vm = this;
	$scope.testMessage = "Brightline";
}]);
