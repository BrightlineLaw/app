var appRouter = angular.module('appRouter', ['ui.router'])

appRouter.config(function ($stateProvider, $urlRouterProvider) {
	
	// for any unmatched url, redirect to /login
	$urlRouterProvider.otherwise('/login');

	// setup states
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardController'
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'
		})
		.state('settings', {
			url: '/settings',
			templateUrl: 'views/settings.html',
			controller: 'SettingsController'
		})
		.state('help', {
			url: '/help',
			templateUrl: 'views/help.html',
			controller: 'HelpController'
		})
		.state('modules', {
			url: '/modules',
			templateUrl: 'views/modules.html',
			controller: 'ModulesController'
		})

})
