$(document).ready(function() {
$("a").click(function(){
var check = "";
$("main").html("");
if($(this).attr("title") == "toobin")
{
check = "json_files/toobin.json";
}
else if($(this).attr("title") == "sorkin")
{
check = "json_files/sorkin.json";
}
else if($(this).attr("title") == "chua")
{
check = "json_files/chua.json";
}
else if($(this).attr("title") == "sampson")
{
check = "json_files/sampson.json";
}
$.getJSON(check, function(data){
            //console.log(data);
$.each(data, function(){
$.each(this, function(key, value){
$("main").append(
    "<h1>" + value.title + "</h1>"+"<img src=" + value.image + "><h2>" + value.month + "<br>" + value.speaker + "</h2><p>" + value.text + "</p>"
);
});
});
});
});
}); 