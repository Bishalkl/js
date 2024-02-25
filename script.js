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

// const minNum = 1;
// const maxNum = 2;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

// // reset
// let attempt = 0;
// let guess;
// let running = true;

// while(running){
//     let guess = window.prompt(`Enter the number between ${minNum} - ${maxNum}.`);
//     if( guess == answer){
//         attempt ++;
//         console.log(`You have guessed it correctly in ${attempt}`);
//         running = false;
//     }else{
//         attempt++;
//     }
// }


// variable scope = where a variable is recognized 

// my project is to make a program which helps to conver the Temperature conversion program
// my project is to make dice roller
// my project is to make random number game
// my project is to generat a random password


// spread opeartor : ... alows an iterable such as an array or string to be expanded into sperate elements (unpack the elements)



 let number = [1,2,3,4,5];
 let maximum = Math.max(...number);

 let fruits = ["apple", "orange", "banana"];
 let newfruits = [...fruits];
 console.log(newfruits, maximum);


// rest parameters = (...rest )

// function openFridge(...foods){
//     console.log(foods);
// }


// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";




// openFridge(food1,food2);

// const foods = getFood(food1, food2);
// console.log(foods);


// funciton sum
function SumNumbers(...nums){
    let result = 0;
    for(let number of nums){
        result += number;
    }

    return result / nums.length;
}

const average = SumNumbers(75,78,100,36);
console.log(`The average is ${average}`);



// callback
hello(bye); 

function hello(callback){
    console.log("Hello");
    callback();
}

function bye(){
    console.log("bye");
}




// foreach
let numberr = [54, 383, 68, 39, 34];

numberr.forEach(function(numbers) {
    if (checkNumbers(numbers)) {
        console.log(numbers);
    }
});

function checkNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}




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
// spread operator
// rest parameter
// join() 
// callback a funnction that is passed as an argument to another function.
// forEach()


















