        
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getItems();
//   var itemAdder = this;

//   itemAdder.itemName = "";
//   itemAdder.itemQuantity = "";

//   itemAdder.addItem = function () {
//     ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//   }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffServicee) {
//   var showList = this;

//   showList.items = ShoppingListService.getItems();

//   showList.removeItem = function (itemIndex) {
//     ShoppingListService.removeItem(itemIndex);
//   };
}


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyArr = [];

  toBuyArr = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 11}, {name: "cookies", quantity: 12}, {name: "cookies", quantity: 13}, {name: "cookies", quantity: 14},
  {name: "cookies", quantity: 15}, {name: "cookies", quantity: 16}, {name: "cookies", quantity: 17}, {name: "cookies", quantity: 18}, {name: "cookies", quantity: 19}];

    service.getItems = function(){
        return toBuyArr;
    }

  // List of shopping items
//   var items = [];

//   service.addItem = function (itemName, quantity) {
//     var item = {
//       name: itemName,
//       quantity: quantity
//     };
//     items.push(item);
//   };

//   service.removeItem = function (itemIdex) {
//     items.splice(itemIdex, 1);
//   };

//   service.getItems = function () {
//     return items;
//   };
}

})();
  
  
