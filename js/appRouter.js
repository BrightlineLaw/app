var appRouter = angular.module('appRouter', ['ui.router'])

appRouter.config(function ($stateProvider, $urlRouterProvider) {
	
	// for any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/dashboard');

	// setup states
	$stateProvider
		.state('/dashboard', {
			url: '/dashboard',
			templateUrl: 'partials/dashboard.html',
			controller: 'DashboardController'
		})

})
