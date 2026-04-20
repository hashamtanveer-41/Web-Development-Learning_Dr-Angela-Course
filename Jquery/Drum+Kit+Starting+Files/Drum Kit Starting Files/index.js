for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    document.addEventListener("keydown", handleClick)
}
function handleClick(event){
    document.querySelector("."+(event.key || this.innerHTML)).classList.add("pressed");
    setTimeout(()=>{
            document.querySelector("."+(event.key || this.innerHTML)).classList.remove("pressed");
    },100)
    switch(this.innerHTML || event.key){
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play();
            break;
         case "j":
            new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "l":
            new Audio('sounds/crash.mp3').play();
            break;
    
    }
   
}