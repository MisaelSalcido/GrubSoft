var app = angular.module('grubsoft-main', ['ngRoute', 'ngStorage', 'ui.bootstrap']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/cajero.html',
		controller: 'cajeroCtrl'
	})
	.when('/login', {
		templateUrl: '/templates/login.html',
		controller: 'loginCtrl'
	})
	.when('/inventario', {
		templateUrl: '/templates/inventario.html',
		controller: 'inventarioCtrl'
	})
	.otherwise('/');
});
