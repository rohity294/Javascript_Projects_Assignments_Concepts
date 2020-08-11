"use strict";
$(document).ready(function(){
    $("#calculate").click( function() {
    
        var input=$("#cents").val();//say input=97
        var n=Math.floor(input/50); // n=1
        input=input%50; // input=47
        // console.log(input);

        var q=Math.floor(input/25);//q=1
        input=input%25;// input=22
        
        var d=Math.floor(input/10);//d=2
        input=input%10;// input=2;

        var p=Math.floor(input)
        
        // console.log(n,q,d,p);

        $("#quarters").val(q);
        $("#dimes").val(d);
        $("#nickels").val(n);
        $("#pennies").val(p);
        


    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();

    
    
            
}); // end ready() method







    

