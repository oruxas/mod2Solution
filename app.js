  (function () {
     'use strict'; 


  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

    //Injection
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject =['ShoppingListCheckOffService'];

    //Controller Implementation
    function ToBuyShoppingController(ShoppingListCheckOffService) {

    };

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

    };

    //Service Implementation
    function ShoppingListCheckOffService(){
        var service = this;
    };

}());
  
  
