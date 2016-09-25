  (function () {
     'use strict'; 


  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ['$scope','ShoppingListCheckOffService'], function($scope, ShoppingListCheckOffService){
         ShoppingListCheckOffService.getItems();
    })
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', [], function(){
         var service = this;

        var toBuyArr = [];
        var boughtArr  = [];

        toBuyArr = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 11}, {name: "cookies", quantity: 12}, {name: "cookies", quantity: 13}, {name: "cookies", quantity: 14},
        {name: "cookies", quantity: 15}, {name: "cookies", quantity: 16}, {name: "cookies", quantity: 17}, {name: "cookies", quantity: 18}, {name: "cookies", quantity: 19}];
        

        service.getItems = function(){
            return toBuyArr;
        }
    });

    //Injection
    // ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    // AlreadyBoughtShoppingController.$inject =['ShoppingListCheckOffService'];

    // //Controller Implementation
    // function ToBuyShoppingController(ShoppingListCheckOffService) {
       

    // };

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

    };

    //Service Implementation
    // function ShoppingListCheckOffService(){
       

    // };

}());
  
  
