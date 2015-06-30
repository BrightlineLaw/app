var appRouter = angular.module('appRouter', ['ui.router'])

appRouter.config(function ($stateProvider, $urlRouterProvider) {
	
	// for any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise('/dashboard');

	// setup states
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'partials/dashboard.html',
			controller: 'DashboardController'
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'partials/profile.html',
			controller: 'ProfileController'
		})
		.state('settings', {
			url: '/settings',
			templateUrl: 'partials/settings.html',
			controller: 'SettingsController'
		})
		.state('help', {
			url: '/help',
			templateUrl: 'partials/help.html',
			controller: 'HelpController'
		})

})
