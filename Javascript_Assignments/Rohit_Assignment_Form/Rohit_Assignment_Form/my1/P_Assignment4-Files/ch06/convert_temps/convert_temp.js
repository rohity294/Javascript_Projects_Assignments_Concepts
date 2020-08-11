"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var toFahrenheit = function(){
    $("degree_label_1").firstChild.nodeValue = "Enter Degrees C";
    $("degree_label_2").firstChild.nodeValue = "Degrees Farenheit";
    clearTextBoxes();
    $("degrees_entered").focus();
};

var toCelsius = function(){
    $("degree_label_1").firstChild.nodeValue = "Enter Degrees F";
    $("degree_label_2").firstChild.nodeValue = "Degrees Celsiius";
    clearTextBoxes();
    $("degrees_entered").focus();
};

var convertTemp = function(){
    var degrees = $("degrees_entered").value;
    var T = 0;
    
    if(isNaN(degrees) && degrees>373 && degrees<-373){
        alert("Invalid Entry!");
    }
    else{
        if($("to_celsius").checked){
            T = (degrees-32)*5/9;
        }
        else{
            T = degrees*9/5+32;
        }
        $("degrees_computed").value = T.toFixed(0);
    }
    $("degrees_entered").focus();
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};