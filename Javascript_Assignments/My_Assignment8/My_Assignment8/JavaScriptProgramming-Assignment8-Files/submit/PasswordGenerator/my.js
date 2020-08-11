

var str=""



$( document ).ready(function() {
  
    $( "#GetPass" ).click(function() {
        var charnum=$("#charnum").val();
        
        if(isNaN(charnum))
        {
          alert("enter a number only");
        }


        var retVal=caclPass(charnum);
        $("#pass").val(retVal);
      });


      $("#Clear").click(function(){

      
        $("#pass").val("");
        $("#charnum").val("");

      });
    
})





function caclPass(charnum) {

    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", retVal = "";
    
    var n = charset.length;

    for (var i = 0 ; i < charnum; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}