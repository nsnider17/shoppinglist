
//['ngRoute'] is built into Angular, to be used in our application
var app = angular.module('myApp', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		//when a user reaches my root page they will be navigating to the home.html
			.when('/', {
				templateUrl: "views/home.html"
			}).otherwise({
				redirectTo: "/home"
			})
			.when('/home', {
				templateUrl: "views/home.html",
				controller: "HomeController"
			})
			.when('/shopping-list', {
				templateUrl: "views/shopping-list.html",
				controller: "ShoppingListController",
				controllerAs: "shoplist"
			}).otherwise({
				redirectTo: "/home"
			});
	}]);