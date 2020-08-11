var memberArray=[];
var memberObj;

function displayList()
{
      // console.log(memberArray.length);
      // console.log(memberArray);
      var str;
      var NoOfRows;
      //var NoOfCols=2;

      
      if(memberArray.length==0)
      {
        
       str="Currently the list is empty"; 
      }
      else
      {
            console.log(memberArray.length);
            console.log(memberArray);
            NoOfRows=memberArray.length;
            console.log("NoOfRows:"+NoOfRows);
            str="<table border='1' id='membersTable' class='alignMe'><tr><th>Member Id</th><th>Member Name</th></tr>"; 
            for(var i=0;i<NoOfRows;i++)
           {    
               str=str+"<tr>";    
               str=str+"<td>"+memberArray[i].id+"</td>";
               str=str+"<td>"+memberArray[i].name+"</td>";
               str=str+"</tr>";
           }
           
           str=str+"</table>";   
      
      }
          
      document.getElementById("mydiv").innerHTML=str;        
}

function member(id,name){//object constructor
 this.id=id; // using this keyword set id and name of the new object, as it has been passed in arguments
 this.name=name;
}

function mycreate(id,name){
 var memberObj=new member(id,name);//creating new object of type 'member
 return memberObj;//returning the object to the calling function
}



function addMember(){

  var id=document.getElementById('memberIdTxt').value;
  var name=document.getElementById('memberNameTxt').value;
  //var jd=document.getElementById('memberJDTxt').value;
  var flag=true;
  
  if(memberArray.length!=0)
  {
     for(var i=0;i<memberArray.length;i++)
      {
            if(id==memberArray[i].id)
            {
               flag=false;
               alert("This id alredy exists. Please enter a unique id.")
            }
      }
  }
  
  
  if(id=="")
  {
     alert("Id field cannot be left empty"); 
     
  }
  else if(name=="")
  {
      alert("Name field cannot be left empty"); 
       
  }
  else
  {
    if(flag) 
    {
      memberObj=mycreate(id,name);
      console.log("before:"+memberArray.length);
      memberArray.push(memberObj);
      alert("New Member successfully added");
      console.log("after:"+memberArray.length);
  
    }   
    
  }
  
}

function deleteMember(){
  var id=document.getElementById("DeleteIdTxt").value;
  var str;

  for(var i=0;i<memberArray.length;i++)
  {
     if(id==memberArray[i].id)
     {
       memberArray.splice(i,1);
       str="found";
       break;
     }

      str="notFound";   
  }


  if(str=="found")
  {
   alert("member deleted")
  }
  else
  {
   alert("Kindly enter correct id.Member with the entered id does not exist.")
  }

}

function updateName(i){
      var newName=document.getElementById("newName").value;
      // console.log("newname:"+newName);
     memberArray[i].name=newName; 
     alert("Member details successfully updated.");
}


function updateMember()
{

      var id=document.getElementById("UpdateIdTxt").value;
      var index=-1;
      for(var i=0;i<memberArray.length;i++)
      {
         if(id==memberArray[i].id)
         {
           index=i;
           break;
         }
      }
    
    
      if(index==-1)
      {
       alert("Kindly enter correct id.Member with the entered id does not exist.");
      }
      else
      {     
       var str="Enter updated correct name:"+"<input type='text' id='newName' placeholder='Enter New Name'></input>";
       str=str+"&nbsp &nbsp <input type='button' value='Update' onclick='updateName("+i+")'></input>";
       document.getElementById("mydiv").innerHTML=str;    
      }
    
    }
    
   




function addToList(){
      var str=" <label>Enter Member Id:</label><input type='text' id='memberIdTxt' placeholder='Enter Member Id'></input><br>";
      str=str+"<label>Enter Member Name:</label><input type='text' id='memberNameTxt' placeholder='Enter Member Name'></input><br>";
      str=str+"&nbsp &nbsp<input type='button' id='addMember' value='Add Member' class='alignMe btn btn-dark' onclick='addMember()'></input>"
      document.getElementById("mydiv").innerHTML=str;    
     }
     

function deleteFromList()
{
      var str="<label>Enter Member Id of member to be deleted:</label> &nbsp &nbsp <input type='text' id='DeleteIdTxt' placeholder='Enter Id to delete'></input> &nbsp";
      str=str+"&nbsp &nbsp<input type='button' id='deleteMember' value='Delete Member' class='alignMe btn btn-dark' onclick='deleteMember()'></input>"
      document.getElementById("mydiv").innerHTML=str;    

}     

function updateList()
{
      var str="Enter Member Id of member to be updated:<input type='text' id='UpdateIdTxt' placeholder='Enter Id to update'></input>";
      str=str+"&nbsp &nbsp<input type='button' id='UpdateMember' value='Update Member Details' class='alignMe btn btn-dark' onclick='updateMember()'></input>"
      document.getElementById("mydiv").innerHTML=str;    

}  

window.onload=function(){


}