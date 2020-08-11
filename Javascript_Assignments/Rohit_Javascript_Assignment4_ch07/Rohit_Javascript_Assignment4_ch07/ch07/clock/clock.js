"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {


    // In the displayCurrentTime() function, add code that uses the Date 
    //  to determine the current hour, minute, and second.
    //   Convert these values to a 12- hour clock, determine the AM/PM value, and display these values in the appropriate span tags.


     var d=new Date();
    //  document.write(d.getHours()+","+d.getMinutes()+","+d.getSeconds());
    var h= d.getHours();
    var m= d.getMinutes();
    var s= d.getSeconds();
    var AMPM="AM";

    if(h>11){
       AMPM="PM";
    }

    if(h>12){

        h=h-12;
    };




    $("hours").innerHTML=h;
    
    $("minutes").innerHTML=m;

    $("seconds").innerHTML=s;

    $("ampm").innerHTML=AMPM;

};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
   
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.

    
    displayCurrentTime();
    setInterval(displayCurrentTime,1000);



};