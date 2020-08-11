var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var counter = scores.length;

var $ = function (id) { return document.getElementById(id); };

var addScore = function(){
    names.push($("name").value);
    scores.push($("scores").value);
};

var addition = 0;
for(var i=0; i<=scores.length; i++){
    addition +=parseFloat(scores[i],5);
}

var displayResults = function(){
    var average = addition/scores.length;
    
    var highest_student = 0;
    var highestScore = scores[0];
    
    for(var i=0; i<=scores.length; i++){
        if(highestScore<scores[i]){
            highestScore == scores[0];
            highest_student == i;
        }
        else{
            alert("No Scores To Display!");
        }
        postMessage("Student with highest score: "+names[highest_student]+" with "+highestScore+" marks.");
    }
};

var displayScores = function(){
    for(var x=0; x<=scores.length; x++){
        postMessage(""+names[x]+" "+scores[x]+"\n");
    }
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};
