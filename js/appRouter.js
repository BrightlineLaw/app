var appRouter = angular.module('appRouter', ['ngRoute'])

appRouter.config(function ($routeProvider) {
	$routeProvider

		.when('', {
			templateUrl: '../views/home.html',
			controller: 'homeController',
			controllerAs: 'homeCtrl'
		})

		// catch all route
		.otherwise({
			redirectTo: ''
		})

})
