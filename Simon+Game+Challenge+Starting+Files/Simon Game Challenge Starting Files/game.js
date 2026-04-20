
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern =[]
var userClickedPattern = []

var count =0;
var toggle = true;

$(document).keydown(()=> {
    if(toggle){
        $("#level-title").text(`Level ${count}`)
        nextSequence();
        toggle = false; 
    }
})

function nextSequence(){
    userClickedPattern =[]
    count++;
     $("#level-title").text(`Level ${count}`)
      num = Math.floor((Math.random()*4));
       var randomChoosenColor = buttonColours[num]
        gamePattern.push(randomChoosenColor)
         console.log(randomChoosenColor);
        
         $(`#${randomChoosenColor}`).fadeOut(100).fadeIn(100);
         playSound(randomChoosenColor)
}


$(".btn").click(function handleClick(event){
    var userChosenColor = $(this).attr("id");    
    animatePress(userChosenColor)
    playSound(userChosenColor)
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1)
    
})

function playSound(name){    
        new Audio(`sounds/${name}.mp3`).play();
        
}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed")
    setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed")
    }, 100);
}


function checkAnswer(currentLevel){
    if( userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
        console.log("success");
    }
    else{
        $("body").addClass("game-over")
         playSound("wrong")
           $("#level-title").text("Game Over. Press any key to restart")
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
        startOver();
    }
}

function startOver(){
    count = 0;
    gamePattern=[]
    toggle = true;   
}