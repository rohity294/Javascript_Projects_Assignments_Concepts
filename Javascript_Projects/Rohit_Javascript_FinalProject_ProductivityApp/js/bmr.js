$(document).ready(function(){


  $('#weight').focus(function(){
    $('#weight').val("");
   });

   $('#height').focus(function(){
    $('#height').val("");
   });

   $('#age').focus(function(){
    $('#age').val("");
   });




   $('#calcBMR').click(function()
  {
    var flag=true;   
    var w=parseFloat($('#weight').val()).toFixed(2); 
    var h=parseFloat($('#height').val()).toFixed(2);
    var a=parseFloat($('#age').val()).toFixed(2);
   
    if(w=="" || isNaN(w))
    {
        alert("Weight needs to be entered.Please enter Weight as a positive number");
        flag=false;
    }

    else if(h=="" || isNaN(h))
    {
        alert("Height needs to be entered.Please enter Height as a positive number");
        flag=false;
    }

    else if(a=="" || isNaN(a) || a<15 || a>80)
    {
        alert("Age needs to be entered.Please enter Age as a positive number from 15 to 80.");
        flag=false;
    }

    else
{

    var g=$('input[name="gender"]:checked').val();
    var bmr;
    
    if(g==undefined)
    {
       alert("Please select your gender");
       flag=false;
    }


    
    if(g=="male")
    {
      bmr=(10*w)+(6.25*h)-5*a+5;
    }

    if(g=="female")
    {
        bmr=(10*w)+(6.25*h)-5*a-161;
        
    }
    if(flag)
    {
        var str1="<b>Your BMR= "+bmr+" calories/day</b>";
        
        
        $('#result').html(str1+"<br>");

        var number_of_rows=5;
        var number_of_columns=2;

        var table_body='<table id="centertable" border="1">';

        for(var i=0;i<number_of_rows;i++)
        {
            table_body+='<tr>';
        

        for(var j=0;j<number_of_columns;j++)  
        {
          table_body+='<td>';

          if(i==0&&j==0){
            table_body+='<b>For Other Activity Types</b>';
          }
          if(i==0&&j==1){
            table_body+='<b>Required Calories Per Day<b>';
          }

          if(i==1&&j==0){
            table_body+='Sedentary(little or no exercise)';
          }
          if(i==1&&j==1){
            table_body+=bmr*1.2;
          }

          if(i==2&&j==0){
            table_body+='Lightly active(light exercise/ sports 1-3 days/week)';
          }
          if(i==2&&j==1){
            table_body+= bmr*1.375;
          }


          if(i==3&&j==0){
            table_body+='Moderately active(moderate exercise/ sports 6-7 days/week)';
          }
          if(i==3&&j==1){
            table_body+=bmr*1.55;
          }


          if(i==4&&j==0){
            table_body+='Very active(hard exercise every day)';
          }
          if(i==4&&j==1){
            table_body+=bmr*1.725;
          }


          if(i==5&&j==0){
            table_body+='Extra active(hard exercise 2 or more times per day, or training for marathon, or triathlon, etc)';
          }
          if(i==5&&j==1){
            table_body+=bmr*1.9;
          }

          table_body+='</td>';  
        }
        table_body+='<tr>';
        }    
     
     table_body+='</table>';

     $('#TableDiv').html(table_body+"<br>");

     var str="<br><br><b>Visual Depiction:- BMR Range(Required calories/day)</b><br>"+"<progress value='"+bmr+"'max='3000'> </progress>"
     +"<br>0"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"3000";
     
     $('#ProgressDiv').html(str+"<br>");


        


    }
}

    
 }); 
   

 
 $('#reset').click(function(){
  $('#weight').val("");
  $('#height').val("");
  $('#age').val("");
  $('#result').html("");
  $('#ProgressDiv').html("");
  $('#TableDiv').html("");
});



});




 