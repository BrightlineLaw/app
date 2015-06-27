var homeCtrl = angular.module('homeCtrl', []);

homeCtrl.controller('homeController', ['$scope', function($scope) {
	var vm = this;
	$scope.testMessage = "Brightline";
}]);
