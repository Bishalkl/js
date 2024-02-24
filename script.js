// 


// string slicing
// const email = "Bishal@gmail.com";

// let username = email.slice(email.indexOf('@') + 1);
// console.log(username);


// method chaining
// let username = window.prompt("Enter your username");
// username = username.trim().charAt().toUppercase() + slice(1).extraChars.toLowercase(); 
// console.log(username);


// to check strict equality method we have to use three assignement operator === for to check value and datatype also and for inequality !==.


// // while loop
// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your username`);

//     if(username == "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log(`Your are logged in!`);
//     }
//     else{
//         console.log(`Invalid credentails! plrase try again`);
//     }

// }



// Number Guessing Game

const minNum = 1;
const maxNum = 2;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

// reset
let attempt = 0;
let guess;
let running = true;

while(running){
    let guess = window.prompt(`Enter the number between ${minNum} - ${maxNum}.`);
    if( guess == answer){
        attempt ++;
        console.log(`You have guessed it correctly in ${attempt}`);
        running = false;
    }else{
        attempt++;
    }
}


// variable scope = where a variable is recognized 

// my project is to make a program which helps to conver the Temperature conversion program



// today i have learned
// string slicing
// method chaining
// strict operator
// while loop and do while loop
// for loop
// variable scope  (local and global)!


// arrays
// push
// pop
// shift
// unshift
// length 
// indexOf
// fruit of fruits (short cut for loop  in arrays)
// sort
// reverse
 






