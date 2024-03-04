const display = document.getElementById("display");
const valueInput = document.getElementById("input");
const btn = document.getElementById("btn");

let min = 1;
let max = 10;


function randomGenerator(){
    return  Math.floor(Math.random() * (max - min) + 1) + min;
}


btn.onclick = function(){
    let getValue = parseInt(valueInput.value);
    let result = randomGenerator();
    if(getValue === result){
        display.textContent = `You have correct, Congratulation!`;
    } else if( getValue < result){
        display.textContent = `It is small, Try again`;
    } else if( getValue > result){
        display.textContent = `It is big, Try again`;
    } else{
        display.textContent = `Please enter the valid number`;
    }
}