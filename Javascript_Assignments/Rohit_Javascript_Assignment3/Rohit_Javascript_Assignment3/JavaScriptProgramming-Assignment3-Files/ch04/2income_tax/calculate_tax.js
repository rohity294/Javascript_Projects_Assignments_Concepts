"use strict";
var $ = function (id) {
    return document.getElementById(id);
};



window.onload = function () {
    $("calculate").onclick = processEntry;
};






var processEntry = function(){
    var Income=parseFloat($("income").value);
    var IncomeTax;
    
    

    if(Income<0 || isNaN(Income))
    {
        alert("Enter a numeric value>=0");
        $("income").focus();
    }

   

    else
    {
        IncomeTax=calculateTax(Income);
        $("tax").value=IncomeTax;
        $("income").focus();
    }
   
    

}



var calculateTax = function(Income){
    var IncomeTax; 
    if(Income==0)
    {
      IncomeTax=0;
      return IncomeTax;     
    }
 
    else
    {
        IncomeTax=0.1*Income;
        return IncomeTax;
    }
 
 
 }