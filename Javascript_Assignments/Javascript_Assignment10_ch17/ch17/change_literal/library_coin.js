"use strict";

// In the library file, code an object literal named coins that has a cents property and two methods:
//  The isValid() method should determine whether the cents property is valid.
//   The getNumber() method should accept a divisor parameter (like 25 for quarters), 
//   calculate the number of coins of that type that are required, 
//   update the cents property with the remaining cents, and return the number of coins.


var coins={
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


