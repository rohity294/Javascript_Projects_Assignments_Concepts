$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	

	 $("#reservation_form").submit(function(e){

		//e.preventDefault();
	
		//  $("#arrival_date").focus();
		 
		 var isvalid=true;
		 
		 var a1=$("#arrival_date").val().trim();


		 console.log(a1);
		 if(a1==""){
			 isvalid=false;
			 $("#arrival_date").next().text("value required") ;
		 }

         var a2=$("#nights").val().trim();
		 if(a2==""){
			 isvalid=false;
			}
         if(isNaN(a2)){
           isvalid=false; 
		 }


		var n=$("#name").val().trim();
		if(n==""){
			isvalid=false;
		}
		

		 var eml=$("#email").val().trim();
		 if(eml==""){
			 isvalid=false;
		 }

		if(!emailPattern.test(eml))
		isvalid=false;
			
		
		var ph=$("#phone").val().trim();
		if(ph==""){
				isvalid=false;
		}
		if(isNaN(ph)){
			isvalid=false; 
		  }
		 
        console.log("status:"+isvalid);

	   if(!isvalid)
	    {
		
			alert("some error in form filling"); 
			e.preventDefault();
		}
		
		
		 

			

	 })

}); // end ready