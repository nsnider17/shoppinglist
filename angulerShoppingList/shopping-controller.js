angular.module('myApp')

.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems) {
	var shoplist = $scope;

	shoplist.items = ShoppingListItems.getList();

	shoplist.addItem = function(newItem){
		shoplist.items.push({
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
			})
	};

	shoplist.removeItem = function(item){
		var removeItem = shoplist.items.indexOf(item);
		shoplist.items.splice(removeItem, 1);
	};

	shoplist.removeAll = function(){
		shoplist.items = [];
		ShoppingListItems.removeAll();
		// shoplist.items.length = 0;
	}

}])