"use strict";
var calculateCoins=function(cents){
var coinsPrototype={
    cents: 0,
    isValid: function(){
         if (this.cents < 0 || this.cents > 99)
            {
                return false;
            }
        else{
            return true;
        }
    },
    getNumber: function(divide){
        var coins = this.cents / divide;
        if (this.cents > 0){
            this.cents = this.cents % divide;
        }
        return Math.floor(coins);
    }
};

var coins=Object.create(coinsPrototype);
coins.cents=cents;

};




