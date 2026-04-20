var gamePattern =[]
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = []
var count =0;
var randomChoosenColor;
var toggle = true;
function nextSequence(){
     $("h1").html(`Level ${count}`)
      num = Math.floor((Math.random()*4));
        randomChoosenColor = buttonColours[num]
        gamePattern.push(randomChoosenColor)
         console.log(randomChoosenColor);
        
}

$(document).keydown(()=> {
    $("h1").html(`Level ${count}`)
    if(toggle){
        nextSequence();
        toggle = false; 
    }
})


$(".btn").click(function handleClick(event){
    var userChosenColor = event.target.id;
    animatePress(userChosenColor)
    userClickedPattern.push(userChosenColor)
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1)
    
})

function correctClick(){    
        $(this).fadeOut(100).fadeIn(100);
        new Audio(`sounds/${randomChoosenColor}.mp3`).play();
        
}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed")
    setTimeout(() => {
        $(`#${currentColor}`).removeClass("pressed")
    }, 100);
}


function checkAnswer(currentLevel){
    if(currentLevel<=3 && userClickedPattern[currentLevel] === gamePattern[count++]){
        console.log("success");
        correctClick();
        setTimeout(nextSequence(), 1000)
        userClickedPattern = []
    }else if(currentLevel>3){
        console.log("game over");
        startOver();
    }
    else{
        $("body").addClass("game-over")
         new Audio(`sounds/wrong.mp3`).play();
        setTimeout(() => {
            $("body").removeClass("game-over")
        }, 200);
    }
}

function startOver(){
    count = 0;
    gamePattern=[]
    toggle = true;   
    userClickedPattern=[]
}