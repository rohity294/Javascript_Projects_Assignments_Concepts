$(document).ready(function(){
    
var isopen="Game Night 10% Discount is ";

isopen = isopen + (function() 
    {
    var isopen = new Date();
    
    if ((isopen.getDay() === 0  || isopen.getDay() === 6 || isopen.getDay() ===5) && isopen.getHours() >19) 
    {
        return "<span style='color: green;'>Active</span>";
        
    } 
    else 
    { 
        return "<span style='color: red;'>Inactive</span>"; 
    }
    })(); 
    
    console.log(isopen);
    
$("#display").append(isopen);    

});