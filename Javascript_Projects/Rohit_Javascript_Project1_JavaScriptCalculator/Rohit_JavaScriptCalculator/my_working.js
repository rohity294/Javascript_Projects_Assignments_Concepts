var flag="";

function clearAll(form)
{
    form.row1.value=0; 
}
function deleteSymbol(form){
    form.row1.value = form.row1.value.substring(0, form.row1.value.length - 1);
}

function printSymbol(form, symbol) {
	if(form.row1.value == null || form.row1.value == "0")
		form.row1.value = symbol;
	else
		form.row1.value = form.row1.value+symbol;
}

function result(form){
	if(flag=="")
	{form.row1.value = eval(form.row1.value);}
	
	if(flag=="ForPercent"){
		var full=form.row1.value;
		var myarray=[],myarray2=[];
		var end,start;
		var num1="",num2="";
		for(var i=0;i<=full.length;i++)
		{
			
			if(full[i]=='P'){
		
			   end=i-2;
			
			   for(var j=0;j<=end;j++ ){
				   num1=num1+full[j];
				   
			   }
			}
			 			
		}

		var p1=parseInt(num1);
		
		
		for(var k=0;k<=full.length;k++){
		 
			if(full[k]=='f'){
		
				start=k+2;

				for(var l=k+2;l<=full.length;l++ ){
					if(!isNaN(full[l]))
					{num2=num2+full[l];}
					
				}
			}
           
		}	
		
	   
		var p2=parseInt(num2);

		// console.log(p1+","+p2);

		var output=(p1/100)*p2;
		 
		// console.log(output);
        
        form.row1.value = output;
            
	}
		
}
         


function calcSquare(form) {
	form.row1.value = eval(form.row1.value) * eval(form.row1.value);
}

function calcCube(form) {
	form.row1.value = eval(form.row1.value) * eval(form.row1.value) * eval(form.row1.value);
}

function calcModulus(form){
    form.row1.value = form.row1.value + "%";
    
}

function calcExponent(form){
    form.row1.value = Math.exp(form.row1.value);
}

function calcSquareRoot(form) {
	form.row1.value = Math.sqrt(form.row1.value);
}

function calcCubeRoot(form) {
	form.row1.value = Math.cbrt(form.row1.value);
}

function calcSin(form){
	form.row1.value=Math.sin(form.row1.value);
}

function calcCos(form){
	form.row1.value=Math.cos(form.row1.value);
}

function calcTan(form){
	form.row1.value=Math.tan(form.row1.value);
}

function calcLog(form){
	form.row1.value=Math.log(form.row1.value);
}

function calcPercentage(form){
	form.row1.value= form.row1.value + " Percent of ";
	flag="ForPercent";
	
}