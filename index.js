// var name = "hasham";
// var firstLetter = name.slice(0, 1).toUpperCase();
// var remainingName = name.slice(1, name.length);
// var finalName = firstLetter.concat(remainingName.toLowerCase());
// console.log(finalName)

//
// var loveCalculator =( Math.random()*100).toFixed(0);
// console.log(loveCalculator+"%")

// Math.pow()

// function bmiCalculator (weight, height) {
//     var bmi = weight/(Math.pow(height, 2));
//     if (bmi>24.9) {
//         var interpretation = "Your BMI is "+bmi+" so you are overweight.";
//     } else if(bmi>18.5) {
//         interpretation = "Your BMI is "+bmi+" so you are normal weight.";
//     }else{
//         interpretation = "Your BMI is "+bmi+" so you are underweight.";
//     }
//     return interpretation;
// }
//
// console.log(bmiCalculator(12, 4))
// function myName(){
//
// }

//
// function isLeap(year) {
//     if (year%4===0 && (year%100 !==0 || year%400===0)) {
//         console.log("Leap year.")
//     } else {
//         console.log("Not leap year.")
//     }
// }
//
// isLeap(2100)
// var a = ;
// function fizzBuzz(){
//     var arr = [];
//     arr.push(a++);
//     console.log(arr)
//
//     if (a%15 === 0){
//         console.log("FizzBuzz")
//     }else if (a%5===0){
//         console.log("Buzz")
//     }else if (a%3 === 0 ){
//         console.log("Fizz")
//     }
// }
// fizzBuzz();

// function whosPaying(names) {
//
//     /******Don't change the code above*******/
//
//         //Write your code here.
//     var randomPosition = Math.floor((Math.random()*names.length));
//     return names[randomPosition]+" is going to buy lunch today!";
//     /******Don't change the code below*******/
// }
// console.log(whosPaying(["a", "b"]))
//
// function beer(){
//     count = 1;
//     while(count <100){
//         console.log((100 - count)+" bottles  of beer on the wall, "+(100 - count)+" bottles of beer. Take 1 down pass it around, "+ ++count+" bottles of beer on the wall.")
//     }
// }
//
// beer()

function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var arr = [];
    //Write your code here:
    for(var i = 0; i<n; i++){
        if (i===0)arr.push(0);
        else if (i===1)arr.push(1);
        else {
            arr.push(arr[i-1]+arr[i-2])
        }
        console.log(arr[i])
    }
    //Return an array of fibonacci numbers starting from 0.
    return arr;
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(6));

