$(document).ready(function(event){
        $('#Clickk').click(function(){
            var isValid=true;
            var wghtpund = $('#weight').val(); 
            var height = $('#height').val(); 
            var inches = parseInt($('#inches').val());
            var gender = $("input[name='selection']:checked").val(); 
            var age = $('#age').val();
            var activities= $('#exercise :checked').val();
            if( wghtpund== "" || isNaN(wghtpund) || wghtpund<0){
                $('#weight').next().text("Either Enter Positive Number or Any Number Value");
                isValid=false;
            }
    
       if(height=="" || isNaN(height) || height<0){
           $('#height').next().text("Either Enter Positive Number or Any Number Value");
           isValid=false;
       }
            if(inches=="" || isNaN(inches) || inches<0){
           $('#height').next().text("Either Enter Positive Number or Any Number Value");
           isValid=false;
       }
      
        if(age== "" || isNaN(age) || age<0){
           $('#age').next().text("Either Enter Positive Number or Any Number Value");
            isValid=false;
       }  
       if(isValid){
            var wghtkg= parseFloat(wghtpund*0.4536);
            
            var feetToInch = parseInt((height*12));
            var inch = feetToInch + inches;
            var centimeter = parseInt(inch*2.54);
            
            if(gender=='female'){
            var restingEnergy = (10*wghtkg)+(6.25*centimeter)-(5*age)-161;
            
                  if(activities==2)
                {
                    var calries = restingEnergy * 1.12;
                    
                }
                else if(activities==3)
                    {
                        var calries = restingEnergy * 1.27;
                        
                    }
                  else if(activities==4)
                    {
                        var calries = restingEnergy * 1.45;
                        
                    }
            }
            else if(gender='male')
                {
                var restingEnergy = (10*wghtkg)+(6.25*centimeter)-(5*age)+5;
                    
                
                if(activities==2)
                {
                    var calries = restingEnergy * 1.11;
                    
                }
                else if(activities==3)
                    {
                        var calries = restingEnergy * 1.25;
                        
                    }
                  else if(activities==4)
                    {
                        var calries = restingEnergy * 1.48;
                        
                    } 
                }
            $('#result').val(calries);
                var resultval= parseInt($('#result').val());
            if(resultval== "" || isNaN(resultval)){
                alert("Please enter the number value");
            }
            else{
                var loseWeightCal= resultval-1000;
                $('#lossWight').val(loseWeightCal);
            }
            
            
                
            var gainWeightCal= resultval+1000;
            $('#gainWight').val(gainWeightCal);    
            }
        });
        $('#clear').click(function(){
                $('#weight').val(""); 
            $('#height').val(""); 
            $('#inches').val("");
            $('#age').val("");
            $('#result').val("");
            $('#lossWight').val("");
            $('#gainWight').val(""); 
        });

    });

    

