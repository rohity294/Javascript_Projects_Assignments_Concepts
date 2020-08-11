function select(){
    var sel = document.getElementById("select").value;
    console.log(sel);
    switch(sel){
            case "display" :
                document.getElementById("stattable").style.display = "block";
                break;
            case "nodisplay" :
                document.getElementById("stattable").style.display = "none";
                break;
        }
}