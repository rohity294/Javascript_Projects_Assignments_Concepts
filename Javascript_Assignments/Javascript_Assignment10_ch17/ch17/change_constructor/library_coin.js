



    "use strict";


function coins(cents){

    this.cents = cents;

    this.isValid = function()

    {

        return !(isNaN(cents) || cents < 0 || cents > 99);

    }

    this.getNumber = function(divide)

    {

        var c = Math.floor(cents/divide);

        cents = cents - c * divide;

        return c;

    }

}
