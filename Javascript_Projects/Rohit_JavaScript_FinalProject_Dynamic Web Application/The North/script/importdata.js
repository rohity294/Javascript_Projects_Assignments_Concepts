window.onload=function(){


var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      var response=xhttp.responseText;
     
response=JSON.parse(response);

data=response.data;

var output="";




var str="<table border='0' id='mytable' cellpadding='5' class='table table-hover table-dark'><tr><th scope='col'>Player Name</th><th scope='col'>Games Played</th><th scope='col'>Minutes Per Game</th><th scope='col'>Points Per Game</th><th scope='col'>Player's Photo</th></tr>";


for(var i=0;i<data.length;i++)
{  
         str=str+"<tr>";    
         str=str+"<td scope='row''>"+data[i].Name+"</td>";
         str=str+"<td>"+data[i].GamesPlayed+"</td>";
         str=str+"<td>"+data[i].MinutesPerGame+"</td>";
         str=str+"<td>"+data[i].PointsPerGame+"</td>";
         str=str+"<td><img src=\""+data[i].URL+"\" width=\"85\"  ></td>";
         str=str+"</tr>";
}

str=str+"</table>";
document.getElementById("mydiv").innerHTML=str;
   
    }
  };

  xhttp.open("GET", "json/data.json", true);
  xhttp.send();
  
 }