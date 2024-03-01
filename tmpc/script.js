const screen = document.getElementById('input');
const farhen = document.getElementById('checkbox_input_farhen');
const celcius = document.getElementById('checkbox_input_celcius');
const subbtn = document.getElementById('btn');
const display = document.getElementById('Display');


// function for calc celsius
function calcCelsius(){
    let c = (parseInt(screen.value)-32) * 5 / 9;
    return display.textContent = `The value is ${c.toLocaleString(undefined, {style: "unit", unit: "celsius"})}.`;
};

// function for calc fahrenheit
function calcFahrenheit(){
    let c = (parseInt(screen.value)) * (9 / 5) + 32;
    return display.textContent = `The value is ${c.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"})}.`;
};

// function for click button
subbtn.onclick = function(){
    // condition
    if(celcius.checked == true && !(isNaN(screen.value))){
        calcCelsius();
    } else if(farhen.checked == true && !(isNaN(screen.value))){
        calcFahrenheit();
    }else if( celcius.checked == false && farhen.checked == false){
        display.textContent = "Please checked anyone which you would like to convert!!!";
    }else{
        display.textContent = "please enter a valid degree";
    }
}

// i have learned about dom and i have learn onclick function and isNaN() and parsefunction