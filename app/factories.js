/*
Set up Factories
 */
var factories = {};

factories.contentFactory = function ($http) {
	var factory = {};
	factory.getContent = function() {
		return $http.get('/json/view1.json');
	};

	factory.getItems = function() {
		return $http.get('/json/items.json');
	};

	return factory;
};

demoApp.factory(factories);