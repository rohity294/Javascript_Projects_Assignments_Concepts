"use strict";
$(document).ready(function () {

$("#mySubmit").click(function () {

    var isValid = true;
    
    var namebox= $("#myName");
    var emailbox=$("#myEmail");
    var messagebox=$("#myComments");
    
    var name = namebox.val();
    var email = emailbox.val();  
    var message = messagebox.val();          //getting data from input boxes
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    
    //validating name
    
    if (name=="")
    {
    namebox.next().html("This field is required.");
    isValid = false;
    }
    else
    {
    namebox.next().html("*");
    }
    
    //validating email

    if (email == "") {
    emailbox.next().html("This field is required.");
    isValid = false;

    } 
    else if (!emailPattern.test(email)) 
    {
    emailbox.next().html("Must be a valid email address.");
    isValid = false;
    } 
    else 
    {
    emailbox.next().html("*");
    }

    //validating comment box
    
    if (message=="")
    {
    messagebox.next().html("This field is required.");
    isValid = false;
    }
    else
    {
    messagebox.next().html("*");
    }
    
    
        
    
    
    if (isValid) { 
                        //store value in session storage
                        sessionStorage.name = name;
                        sessionStorage.email = email;
                        sessionStorage.message = message;
                        alert("Data stored successfully!");
                        $("#myName").focus();
                        $("#myName").val("");
                        $("#myEmail").val("");
                        $("#myComments").val("");
            
        }
    
    

    });
    
});