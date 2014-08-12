/*
Set up Controllers
 */
var controllers = {};

controllers.TextController = function ($scope, contentFactory) {

	function getContent() {
		contentFactory.getContent()
			.success(function (data) {
				$scope.pageContent = data;
			});
	}

	function init() {
		getContent();
	}

	init();
};

controllers.ListController = function ($scope, contentFactory) {

	function getItems() {
		contentFactory.getItems()
			.success(function (data) {
				$scope.itemList = data.itemList;
			})
			.error(function (error) {
				$scope.status = 'Unable to load items data.';
			});
	}

	function init() {
		getItems();
	}

	init();
};

demoApp.controller(controllers);