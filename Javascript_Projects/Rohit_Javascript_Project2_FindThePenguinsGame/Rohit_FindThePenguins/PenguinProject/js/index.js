
var yeti;
var mound;
var rightClick=0;
var hs=0;
var round=1;

$(document).ready( function() {

    //This code will run after your page loads

    // $("#yeti").mousedown(function() {
    //     alert("Yaaaarrrr!");
    // });

    init();


});






function init() {
  yeti = Math.floor(Math.random() * 12 + 1);
  //yeti=1;//For game testing, success scenario
  createGame();
  playGame(rightClick,hs);
}

function createGame() {
  // fade the title of the game
  // on click
  $("#title").on("click", function() {
    var audio = new Audio('sounds/start.mp3');
    audio.play();
    $('#instructions').hide();
    $(this).fadeOut(1000, createMound);
  });
  // or on keypress
  $("body").on("keypress", function(event) {
    if (event.which === 13) {
      var audio = new Audio('sounds/start.mp3');
      audio.play();
      $('#instructions').hide(); 
      $("#title").fadeOut(1000, createMound);
    }
  });
}

function createMound() {
  // Add ice mounds to the game
  mound = $(".penguins");
  mound.addClass("mound");
  // Add mound hover effect
  mound.on("mouseenter", function() {
    $(this).addClass("moundHover");
  });
  mound.on("mouseleave", function() {
    $(this).addClass("mound");
    $(this).removeClass("moundHover");
  });
}

function playGame(rightClick,hs) {
    rightClick=0;
    $("#scorebox").css("visibility","visible");// for displaying current score and highest score.
    $("#highestbox").css("visibility","visible");
    $('#scorebox').val("Score: "+rightClick);
    $('#highestbox').val("Highest Score: "+hs);
   

  // display a penguin for each right click and a yeti for wrong click
  for (var i = 1; i < 13; i++) {
    mound = $(".penguins:nth-of-type(" + i + ")");
    if (i != yeti) {
      mound.on("click", function() {
        // var x = $('#myAudio1'); 
        // x.play();
        var audio = new Audio('sounds/squeak.mp3');// for adding audio/sound effects
        audio.play();
        $(this).removeClass("moundHover");
        $(this).addClass("penguin");
        // hide($(this));
        rightClick++;
        $('#scorebox').val("Score: "+rightClick);
        
       
       
        if (rightClick === 11) {
          var audio = new Audio('sounds/clap.mp3');
          audio.play();
          $(".penguins").off("click");
          endGame(1,rightClick,hs);
            }
      });
    } else {
      mound.on("click", function() {
        // var y = $('#myAudio2'); 
        // y.play();
        var audio = new Audio('sounds/roar.mp3');
        audio.play();
        $(this).removeClass("moundHover");
        $(this).addClass("yeti");
        $(".penguins").off("click");
        endGame(0,rightClick,hs);
      });
    }
  }
}

function endGame(winValue,rightClick,hs) {
  yeti = Math.floor(Math.random() * 12 + 1);
  // yeti=1;// For game testing, success scenario
  
  $("#gameholder").fadeOut(2000, function() {

    

    if(rightClick>hs)
  {
      hs=rightClick;
  }


    if (winValue) {// displaying messagaes as per success or fail scenario
      $("#message h2").html("Congratulation, You Win !!!"+"Your score: "+rightClick+" and highest score: "+hs+"<br>Hit Enter to begin new game.");
    } else {
      $("#message h2").html("Game Over as Yeti ate you!!! "+"Your score: "+rightClick+" and highest score: "+hs+"<br>Hit Enter to begin new game.");
    }
    $("#message").css("display", "inline-block");
    $("#message span").on("click", function() {
      reset(rightClick,hs);
    });
    $("body").on("keypress", function(event) {
      if (event.which === 13) {
        reset(rightClick,hs);
      }
    });
  });
}

function reset(rightClick,hs) {// resetting and creating new game 

  $("#message").css("display", "none");
  
  $(".penguins").removeClass("penguin");
  $(".penguins").removeClass("yeti");
  
  createMound();
  
  $("#gameholder").css("display", "block");
  $(".penguins").css("visibility", "visible");
  

  

  
  if(round==1){// for first round, highets score=current score
      hs=rightClick;
      round++;
  }

  if(rightClick>hs){// updating highest score whenever current score exceeds it
      hs=rightClick;
  }

  rightClick=0;// restting current score to zero for new round and passing on value of highest score
  playGame(rightClick,hs);
}

