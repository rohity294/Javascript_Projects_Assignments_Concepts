"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var min = 0;
var s = 0;
var ms = 0;
// var now2=new Date();
var z;


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



var tickStopwatch = function() {    
   
    // increment milliseconds by 10 milliseconds
    
     
     
     ms=ms+10;
    
    
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if(ms==1000){s=s+1;ms=0;}
    
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if(s==60){min=min+1;s=0;}
    //display new stopwatch time
    $("s_minutes").innerHTML=min;
    $("s_seconds").innerHTML=s;
    $("s_ms").innerHTML=ms;
};




// event handler functions
var startStopwatch = function(evt) {
    // console.log("hi");
    // prevent default action of link

        evt.preventDefault();

      
      
    // do first tick of stop watch and then set interval timer to tick 
    

    $("s_minutes").innerHTML=0;
    $("s_seconds").innerHTML=0;
    $("s_ms").innerHTML=0;
    z=setInterval( tickStopwatch,1); 
    
    
      
    

    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    
};

var stopStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
    clearInterval(z);
   
};

var resetStopwatch = function(evt) {
    // prevent default action of link
    evt.preventDefault();
    // stop timer
        
    // reset elapsed variables and clear stopwatch display
    $("s_minutes").innerHTML=0;
    $("s_seconds").innerHTML=0;
    $("s_ms").innerHTML=0;
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.

    
    displayCurrentTime();
    setInterval(displayCurrentTime,1000);
    
    
    // set up stopwatch event handlers
    $("start").onclick=startStopwatch;
    $("stop").onclick=stopStopwatch;
    $("reset").onclick=resetStopwatch;

};



// 3.In the tickStopwatch() function, add code that adds 10 milliseconds to the elapsedMilliseconds variable and then adjusts the elapsedMinutes and elapsedSeconds variables accordingly. Then, add code that displays the result in the appropriate span tags in the page.
// 4. In the startStopwatch() function, add code that starts the stopwatch. Be sure to cancel the default action of the link too, but don’t worry about providing for cross-browser compatibility.
// 5. In the stopStopwatch() and resetStopwatch() functions, add code that stops the stopwatch. Also, in the resetStopwatch() function, reset the elapsed time and the page display. Be sure to cancel the default action of the links too.
// 6. In the onload event handler, attach the stopwatch event handlers to the appropriate links.