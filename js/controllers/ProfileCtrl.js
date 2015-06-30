var ProfileCtrl = angular.module('ProfileCtrl', []);

ProfileCtrl.controller('ProfileController', ['$scope', function($scope) {
	var vm = this;
	$scope.testMessage = "This is /profile";
}])