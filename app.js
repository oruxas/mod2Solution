        
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

    toBuy.pushItem = function(index){
        //alert(index);
        ShoppingListCheckOffService.replaceItem(index);
    }

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;

   bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  var items = [];
  var boughtArr = [];

  items = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 11}, {name: "cookies", quantity: 12}, {name: "cookies", quantity: 13}, {name: "cookies", quantity: 14},
  {name: "cookies", quantity: 15}, {name: "cookies", quantity: 16}, {name: "cookies", quantity: 17}, {name: "cookies", quantity: 18}, {name: "cookies", quantity: 19}];

    service.replaceItem = function (index){
        //alert(index);
        var tempItem = items[index];
        console.log(tempItem);
        boughtArr.push(tempItem);
        
        items.splice(index,1)
        //boughtArr.push(newItem);
        // alert('item: '+item+' with index: '+index+' was bought');
    }

    service.getBoughtItems = function(){
        return boughtArr;
    }
    service.getItems = function(){
        return items;
    };

}

})();
  
  
