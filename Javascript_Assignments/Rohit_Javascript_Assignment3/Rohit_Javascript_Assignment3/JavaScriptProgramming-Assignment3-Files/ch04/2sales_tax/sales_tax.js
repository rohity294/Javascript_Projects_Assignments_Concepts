var $=function(id){
    return document.getElementById(id);
}

var processEnteries= function() {
   
    var SubTotal = parseFloat($("subtotal").value);
    var TaxRate=parseFloat($("tax_rate").value);

    if(SubTotal<=0 || SubTotal>=10000 || TaxRate<=0 || TaxRate>=12){
        alert("Subtotal must be greater than 0 and less than 10000.Also Tax Rate must be greater than 0 and less than 12");
    }
     
    else{
        $("subtotal").focus();
        var TaxAmount=SubTotal*(TaxRate/100);
        var TotalAmount=SubTotal+TaxAmount;
        $("sales_tax").value=TaxAmount;
        $("total").value=TotalAmount;
    }

    
};


var ClearAll=function(){
    $("subtotal").value="";
    $("tax_rate").value="";
    $("sales_tax").value="";
    $("total").value="";
    $("subtotal").focus();

};

var ResetSubtotal=function(){

    $("subtotal").value="";
   
};

var ResetTaxrate=function(){

    $("tax_rate").value="";
};

window.onload=function(){
    $("subtotal").focus();

    $("calculate").onclick=processEnteries;
    $("clear").onclick=ClearAll;

    $("subtotal").onclick=ResetSubtotal;
    $("tax_rate").onclick=ResetTaxrate;
};