var $ = function(id) {
    return document.getElementById(id);
};


var ProcessEntries=function(){


    

    var c=parseInt($("cents").value);
    

    if(c>=0 && c<=99){
        makeChange(c);
    }

    else{
        alert("Enter a value between 0 and 99.");
    }

}

var makeChange= function(c){
    var c;

    //c=97
    
    var q=Math.floor(c/25);//q=3
    c=c%25;//c=22

    var d=Math.floor(c/10);//d=2
    c=c%10;//c=2

    var n=Math.floor(c/5);//n=0
    c=c%5;//c=2

    var p=c;//p=2

    $("quarters").value=q;
    $("dimes").value=d;
    $("nickels").value=n;
    $("pennies").value=p;

}

var ResetAll=function(){
    
    $("cents").value="";
    $("quarters").value="";
    $("dimes").value="";
    $("nickels").value="";
    $("pennies").value="";
    $("cents").focus();

}

var ResetCents=function(){
    $("cents").value="";

}

window.onload=function(){

    $("cents").focus();
    $("calculate").onclick=ProcessEntries;
    $("reset").onclick=ResetAll;   
    $("cents").onclick=ResetCents;
}

