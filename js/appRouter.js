var appRouter = angular.module('appRouter', ['ui.router'])

appRouter.config(function ($stateProvider, $urlRouterProvider) {
	
	// for any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/home');

	// setup states
	$stateProvider
		.state('/home', {
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'homeController'
		})

})
