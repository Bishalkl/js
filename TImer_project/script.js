// declare it 
const display = document.getElementById('display');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

// intial value 
let hourvalue = 0;
let minvalue = 0;
let secondvalue = 0;
let milsecvalue = 0
let isrunning = false;
let intervalId = null;

// function to chage the time value variable 
function updateTImerValues(){
    switch(true){
        case milsecvalue >= 500:
            milsecvalue = 0;
            secondvalue++;
            break;
        case secondvalue >= 60:
            secondvalue = 0;
            minvalue++;
            break;
        case minvalue >=60:
            minvalue = 0;
            hourvalue++;
            break;
        case hourvalue >=24:
            hourvalue++;
            break;     
    }
}

   
// function to update time
function update(){

    // condition to get pad 0 start
   let paddedhour = hourvalue.toString().padStart(2, 0);
   let paddedmin = minvalue.toString().padStart(2, '0');
    let paddedsec = secondvalue.toString().padStart(2, '0');
    let paddedmilsec = milsecvalue.toString().padStart(3, '0');

    // to display it html
    display.textContent = `${paddedhour}:${paddedmin}:${paddedsec}:${paddedmilsec}`;
} 



// function for startTImer
startbtn.onclick = function(){
    if(isrunning === false){
        // set it to running true 
        isrunning = true;

        // set intervalID
        intervalId = setInterval(() => {

            //milsec increment
            milsecvalue++;
            // udate a display
            update();
            // update time change value
            updateTImerValues();
        },1);
        update();
    }
}

// function for pauseTimer
stopbtn.onclick = function(){
    if(isrunning === true){
        // set it to running false
        isrunning = false;
        // stop the timer
        clearInterval(intervalId);
    }
}

// function for resetTimer
resetbtn.onclick = function(){
        // set it to running false
        isrunning = false;
        // intervalid function
        clearInterval(intervalId);
        // setting into intial
        hourvalue = 0;
        minvalue = 0;
        secondvalue = 0;
        milsecvalue = 0;
        update();
}


