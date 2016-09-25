        
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

    toBuy.pushItem = function(index, item){
        //alert(index);
        ShoppingListCheckOffService.getIndex(index, item);
    }

}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;

   
}


function ShoppingListCheckOffService() {
  var service = this;

  var items = [];
  var bought = [];

  items = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 11}, {name: "cookies", quantity: 12}, {name: "cookies", quantity: 13}, {name: "cookies", quantity: 14},
  {name: "cookies", quantity: 15}, {name: "cookies", quantity: 16}, {name: "cookies", quantity: 17}, {name: "cookies", quantity: 18}, {name: "cookies", quantity: 19}];

//   service.pushItem = function(index){
     
//   };

    service.getIndex = function (index, item){
        alert(index, ' ', item);
        // items.splice(index,1);
        // bought.splice(index, 0, item);
        // alert('item: '+item+' with index: '+index+' was bought');
    }

    service.getItems = function(){
        return items;
    };

}

})();
  
  
