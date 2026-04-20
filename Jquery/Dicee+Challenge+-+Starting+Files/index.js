function randomGenrator(){
    var num = Math.floor((Math.random()*6)+1)
    return num;
}
var one = randomGenrator();
var two = randomGenrator();
if(one>two){
 document.querySelector("h1").innerHTML  = "Player One wins"   
}else if(one === two){
    document.querySelector("h1").innerHTML  = "Draw" 
}else {
    document.querySelector("h1").innerHTML  = "Player Two wins" 
}
document.querySelector(".img1").setAttribute("src", `./images/dice${one}.png`)
document.querySelector(".img2").setAttribute("src", `./images/dice${two}.png`)


