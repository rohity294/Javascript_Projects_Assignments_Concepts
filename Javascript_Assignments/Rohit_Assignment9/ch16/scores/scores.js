"use strict";
$(document).ready(function() {
   
    var score_values=[];
    var names=[];
    var lastnames=[];
    // Idea is that both score corresponding to a particular name can be found by matching similar array indices.
    var total=0;
    var avg;
    
    
    var displayScores = function () {  
        // var str1; 
        // var str2;

        // for(var i=0;i<names.length;i++){
        //   str1=str1+names[i]+",";
        // }
       
        // for(var j in score_values){
        //     str2=str2+score_values[j]+",";
        // }

        // $("#scores").val("For the student named: "+str1+", the correspinding scores are "+str2);
        // $('#scores').val("For the student named: "+str1+", the corresponding scores are <br>"+str2);

        for(var i=0;i<names.length;i++){
          $('#scores').val(names[i]+" scored "+score_values[i]+";");
        }
        

    };
    
    $("#add_button").click(function() {
        
    
        // get the add form ready for next entry
        var firstname=$("#first_name").val();
        var lastname=$("#last_name").val();
        var score=parseFloat($("#score").val()).toFixed(2);
        
        $("#first_name").focus();

        score_values.push(score);
        names.push(firstname);
        lastnames.push(lastname);

        for(var i in score_values){
          total=total+score_values[i];
        }

        avg=total/score_values.length;
        $("#average_score").val(avg);
        displayScores();
    
    }); // end click()
    
    $("#clear_button").click(function() {


        // remove the score data from the web page
        // $("#average_score").val( "" );
        // $("#scores").val( "" );

        score_values.length=0;
        names.length=0;
        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click(function() {
      lastnames.sort();
      var str3;
      for(var i in lastnames){
          str3=str3+lastnames[i]+",";
      }
      $("#scores").val("");//clearing whatever previous values were there
      $("#scores").val(str3);

    }); // end click()
    
    $("#first_name").focus();
}); // end ready()