$(document).ready(function(event){
   $('#Clickk').click(function(){
       $('span').text("");
       var isValid=true;
        var wghtpund = $('#weight').val(); 
        var height = $('#height').val();
        var neck = $('#neck').val();
       var weist = $('#waist').val();
       var hip = $('#hip').val();
        var gender = $("input[name='selection']:checked").val(); 
            var age = $('#age').val();
       if( wghtpund== "" || isNaN(wghtpund) || wghtpund<0){
                $('#weight').next().text("Either Enter Positive Number or Any Number Value");
           isValid=false;
            }
    
       if(height=="" || isNaN(height) || height<0){
           $('#height').next().text("Either Enter Positive Number or Any Number Value");
           isValid=false;
       }
      
       if(neck=="" || isNaN(neck) || neck<0){
           $('#neck').next().text("Either Enter Positive Number or Any Number Value");
           if(neck<weist){
               alert("neck value shoul be greater than weist");
           }
           isValid=false;
       }
       
        if(age== "" || isNaN(age) || age<0){
           $('#age').next().text("Either Enter Positive Number or Any Number Value");
            isValid=false;
       } 
       if(weist=="" || isNaN(weist) || weist<0){
           $('#waist').next().text("Either Enter Positive Number or Any Number Value");
           isValid=false;
       }
        if(hip== "" || isNaN(hip) || hip<0){
           $('#hip').next().text("Either Enter Positive Number or Any Number Value");
            isValid=false;
       } 
       if(isValid){
           var westNeck= Math.log10(weist-neck);
           var logheight= Math.log10(height);
           
            if(gender=='male'){
           var result=495/(1.0324-0.19077*westNeck+0.15456*logheight)-450;
            
                  
            }
            else
                {
                    var result=495/(1.0324-0.19077*westNeck+0.15456*logheight)-450;
                    $('#result').html(result+"%");
                }
            

       }
   }); 
     $('#clear').click(function(){
                $('#weight').val(""); 
            $('#height').val(""); 
            $('#neck').val("");
            $('#weist').val("");
            $('#hip').val("");
            $('#age').val("");
            $('#result').val("");
     });
});