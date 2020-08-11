$(document).ready(function(){
   
   $('#weight').focus(function(){
    $('#weight').val("");
   });

   $('#height').focus(function(){
    $('#height').val("");
   });

    $('#calcBMI').click(function(){
        var weight=parseFloat($('#weight').val());
        var height=parseFloat($('#height').val());

        if(weight=="" || isNaN(weight) || weight<=0)
        {
            alert("Weight needs to be entered.Please enter Weight as a positive number");
        }
        else if(height=="" || isNaN(height) || height<=0)
        {
           alert("Height needs to be entered.Please enter height as a positive number"); 
        }
        else
        {   
            height=height/100;// converting units:-cm to m
            var bmi=(weight/(height*height)).toFixed(2);
            var str1="Your BMI="+bmi+" kg/m"+"<sup>2</sup>";
            var category="";
            if(bmi<16)
            {
              category="Severe Thinness";
            }
            if(bmi>=16 && bmi<17)
            {
                category="Moderate Thinness";
            }
            if(bmi>=17 && bmi<18.5)
            {
                category="Mild Thinness";
            }
            if(bmi>=18.5 && bmi<25)
            {
                category="Normal";
            }
            if(bmi>=25 && bmi<30)
            {
                category="Overweight";
            }
            if(bmi>=30 && bmi<35)
            {
                category="Obese Class I";
            }
            if(bmi>=35 && bmi<40)
            {
                category="Obese Class II";
            }
            if(bmi>=40)
            {
                category="Obese Class III";   
            }
            
    
          
            var str3="<br><br>Visual Depiction of your BMI Range(kg/m"+"<sup>2</sup>)<br>"+"<progress value='"+bmi+"'max='40'> </progress>"
            +"<br>0"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"40";
            
           
            var str2="Your category="+"<b>"+category+"</b>";
            $('#result').html("<b>"+str1+"<b>"+"<br><br>"+"<b>"+str2+"</b>"+"<b>"+str3+"</b>");

        }

    });


    $('#reset').click(function(){
        $('#weight').val("");
        $('#height').val("");
        $('#result').html("");
        
    });

   



    }
);


// Moderate Thinness	16 - 17
// Mild Thinness	17 - 18.5
// Normal	18.5 - 25
// Overweight	25 - 30
// Obese Class I	30 - 35
// Obese Class II	35 - 40
// Obese Class III	> 40