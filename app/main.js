var demoApp = angular.module('demoApp', ['ngRoute', 'ngAnimate']);

demoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'TextController',
				templateUrl: '/partials/view1.html'
			})
		.when('/view2',
			{
				controller: 'ListController',
				templateUrl: '/partials/view2.html'
			})
		.otherwise({ redirectTo: '/' }
	);
});