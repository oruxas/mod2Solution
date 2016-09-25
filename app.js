        
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
    console.log(toBuy.items);

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffServicee) {

}


function ShoppingListCheckOffService() {
  var service = this;

  var items = [];

  items = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 11}, {name: "cookies", quantity: 12}, {name: "cookies", quantity: 13}, {name: "cookies", quantity: 14},
  {name: "cookies", quantity: 15}, {name: "cookies", quantity: 16}, {name: "cookies", quantity: 17}, {name: "cookies", quantity: 18}, {name: "cookies", quantity: 19}];

    service.getItems = function(){
        return items;
    }

}

})();
  
  
