$( document ).ready(function() {
    var dt=new Date(); //Thu Jul 11 2019 01:34:52 GMT-0300 (Atlantic Daylight Time)

    // $('#mydiv').html(new Date(dt.getMonth(),dt.getFullYear(),1).getDate());


    var month=dt.getMonth();
    var year=dt.getFullYear();

    mymontharray=['January', 'February','March','April','May','June','July','August','September','October'
                  ,'November','December'];

    // var str="<br>"+mymontharray[month]+" "+year;

    // $('#mydiv2').html(str);
  
     mydaysarray=['Sun ','Mon ','Tue ','Wed ','Thu ','Fri ','Sat'];
    // $('#divfordays').html(mydaysarray);
    var lastdateofcurrentmonth=daysInMonth(dt.getMonth(),dt.getFullYear());//31st July
    console.log(lastdateofcurrentmonth);

    // var x=dt.getDay();console.log(x);//4=Thursday
    var y=new Date(dt.getFullYear(),dt.getMonth(),1);//console.log(y);//Mon Jul 01 2019 00:00:00 GMT-0300 (Atlantic Daylight Time)
    var y2=y.toDateString();//console.log(y2);//Mon Jul 01 2019 00:00:00 GMT-0300 (Atlantic Daylight Time)
    var z=y2.substr(0,3);//console.log(z);//Mon.....first day of current month is Mon and there are total 31 days in current month

    var temp=y.getDay(); //console.log(temp);=1 i.e Mon
    



var mytbl = '<table id="mytable"> <tr><td id="row1_0">Sun</td> <td id="row1_1">Mon</td> <td id="row1_2">Tue</td> <td id="row1_3">Wed</td> <td id="row1_4">Thu</td>  <td id="row1_5">Fri</td> <td id="row1_6">Sat</td></tr>';

$('body').append(mytbl);

var row2='<tr><td id="row2_0"></td><td id="row2_1"></td><td id="row2_2"></td><td id="row2_3"></td><td id="row2_4"></td><td id="row2_5"></td><td id="row2_6"></td></tr>';
$('#mytable').append(row2); 

var str11;
var k=1;
for(var i=0;i<=6;i++){
    if(i==temp){
        for(var j=temp;j<=6;j++){
            str11="#row2_"+j;
            $(str11).text(k++);
        }
    }  
}



var row3='<tr><td id="row3_0"></td><td id="row3_1"></td><td id="row3_2"></td><td id="row3_3"></td><td id="row3_4"></td><td id="row3_5"></td><td id="row3_6"></td></tr>';
$('#mytable').append(row3); 


for(var i=0;i<=6;i++){
    str11="#row3_"+i;
    $(str11).text(k++);
}


var row4='<tr><td id="row4_0"></td><td id="row4_1"></td><td id="row4_2"></td><td id="row4_3"></td><td id="row4_4"></td><td id="row4_5"></td><td id="row4_6"></td></tr>';
$('#mytable').append(row4); 


for(var i=0;i<=6;i++){
    str11="#row4_"+i;
    $(str11).text(k++);
}


var row5='<tr><td id="row5_0"></td><td id="row5_1"></td><td id="row5_2"></td><td id="row5_3"></td><td id="row5_4"></td><td id="row5_5"></td><td id="row5_6"></td></tr>';
$('#mytable').append(row5); 


for(var i=0;i<=6;i++){
    str11="#row5_"+i;
    $(str11).text(k++);
}

var row6='<tr><td id="row6_0"></td><td id="row6_1"></td><td id="row6_2"></td><td id="row6_3"></td><td id="row6_4"></td><td id="row6_5"></td><td id="row6_6"></td></tr>';
$('#mytable').append(row6); 


for(var i=0;i<=6;i++){
    str11="#row6_"+i;
    
    $(str11).text(k++);
}





// var str11=temp
// $()
// // var row2='<tr></tr>';
// for(var i=temp;i<=6;i++){

// }






});


function daysInMonth(iMonth, iYear) 
{ 
    var dt2=new Date(iYear, iMonth, 32).getDate();
    var temp=32-dt2;
    // console.log(temp)//31=last day of July
    // the function new Date(year, month, 32) returns the 32nd day after the month started. 
    // If we subtract that date from 32, we get the final day of that month. Example, 
    // If we pass feb 2018 as an argument,
    // its ‘32nd’ day will be 4th of march, subtract 32 from 4 and we get 28, final day of the month of feb 2018.
    
    return temp;

}