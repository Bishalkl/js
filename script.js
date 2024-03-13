import {areaCircle, circumCircle} from './util.js';


console.log(areaCircle(12));
console.log(circumCircle(34));

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

// my project is to make a program which helps to conver the Temperature conversion program ...done
// my project is to make dice roller  tommorow
// my project is to make random number game ...done
// my project is to generat a random password ... day after tommorow  


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

let names = ["bishal", "bishnu", "roshan"];

names.forEach(capName);
numberr.forEach(checkNumber);


function capName(element , index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
    console.log(array[index]);
}

function checkNumber(element, index, array){
    array[index] = element;
    if(element % 2 == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}


// map() = accepts a callback and applies that function to each element of an array, then return a new array
console.log(names.map(capName));




// filter() = create a new array by filtering out elements

let a = [1,2,3,5,6,8,9,3,4,6,7,3,5];
console.log(a.filter(isOdd));

function isOdd(element,index,array){
    return element % 2 !== 0 && array.indexOf(element) === index;
}


// reduce() = reduce the elements of an array to a single value
const prices = [10,347,14,23];

console.log(prices.reduce(sum));

function sum(accumilator, element){
    return accumilator + element;
}


//function expression
const sayonara = function(){
    console.log('bye');
}

sayonara();

// setTimeout() == to time a set
 
// legal to use function as a argument
setTimeout( () => console.log("Hello"), 3000);

// arrowfunction : a concise way to write function expressions good for simple function that you use only once (parameters) => some code



const e = [1,3,4,5,6,7,4,3,3,6,88,3];
const cube = e.map((element) => Math.pow(element, 3));
console.log(cube);

const oddNumbers = e.filter( (element, index, array) => array[index] % 2 !== 0 && array.indexOf(element) === index);
console.log(oddNumbers)

const total = e.reduce( (a, b) => a + b);
console.log(total);


// object
const person1 = {
    firstName: "Bishal",
    lastName: "koirala",
    isEmployed: false,
    age: 20,
    sayhello: function(){console.log(`Hello, I name is ${this.firstName} ${this.lastName}`)},
    eat: () => console.log("I eat food"),
}

console.log(person1.isEmployed, person1.age);
person1.sayhello();
person1.eat();



// this : reference to the object where This is used (object depends on the immediate context.(example: person.name = this.name), However, it doesn't work with arrow fuction, it will return window object instead.

const person2 = {
    firstName: "Komal",
    lastName: "koirala",
    isEmployed: false,
    age: 20,
    sayhello: function(){console.log(`Hello, I name is ${this.firstName} ${this.lastName}`)},
    eat: () => console.log("I eat food"),
}

// constructor: special method for defining the properties and method of objects.

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`Hello, i am driving ${this.model} made in ${this.make}on ${this.year}.`)}
}

const car1 = new Car("Nepal", "Mustang", 2004, "Red");

console.log(car1.make, car1.model, car1.year, car1.color);

car1.drive();

// class = {Es6 feature} provides a more structured and cleaner way to work with objects compared  to traditional constructor function ex. static keyword, encapsulation, inheritance.nam


class product{

    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

}

const product1 = new product("Bishal", 24);
product1.displayProduct();



// inheritance 
class Animal{
    constructor(name){
        this.name = name;
    }

    // method  for make a sound
    makesound() {
        return "Generic animal sound";
    }
}

// Define a subclass Dog that extends Animal
class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makesound(){
        return "Woof!";
    }

    // Method specific to Dog class
    fetch(items) {
        return `${this.name} fetched the ${items}`
    }
}

// Define a subclass Cat that extends Animal
class Cat extends Animal {
    constructor(name){
        super(name);
    }

    // Method to make cat sound
    makesound() {
        return "Meow!";
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Test the method
console.log(dog.makesound());
console.log(dog.fetch("ball"));
console.log(cat.makesound());


// super keyword = keyword is used in classes to call the constructor or accessthis o the properties and method of a parent (superclass) 
// this = this object
// super = the parent



// getter and setter
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.log("Width must be a positive number");
        }
    }


    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.log("height must be a positive number")
        }
    }


    get width(){
        return `${Number(this._width).toFixed(1)}cm`;
    }

    get height(){
        return `${Number(this._height).toFixed(1)}cm`;
    }

    get area(){
        return `${(Number(this._width) * Number(this._height)).toFixed(1)} cm square.`;
    }

}

const rectangle = new Rectangle(4,2);

rectangle.width = 12;  // it is by getter
rectangle.height = 14; // it is by getter
// and condition or property by a setter 

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


// Destructuring = extract values afrom arrays and objects, then assign them to variables in convenient way .
// [] = to perform array destructuring
// {} = to perform object destructuring

// swap to value of to variable
let g = 1;
let h = 2;

// example one 
[g, h] = [h, g];
console.log(g);
console.log(h);


// example two

const color = ["red", "blue", "green"];
const [firstcolor, secondcolor, thirdcolor] = color;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);


// example third
// first  create a object
const student1 = {
    fullName : "Bisha koirala",
    age : 20,
    address: "Khorsane",    
}

function displayStudent({fullName, age, address}){
    console.log(`Hello ${fullName}, You are ${age} from ${address}`);
}

displayStudent(student1);



const student2 = {
    fullName: "Komal koirala",
    age: 21,
    address: {
        country: "Nepal",
        city: "Khorsane",
        district: "Morang",
    }

}

console.log(student2.address);

const students = [{ name: "Bishal koirala", age: 21}, 
                  { name: "Komal koirala", age: 20},
                  { name: "Sujan limbu", age: 19}];

students.push({name: "Bishnu", age: 23});
console.log(students);


// using map
const studentsName = students.map(Name => Name.name);
console.log(studentsName);

// using filter
const checkAge = students.filter(Age => Age.age <= 20);
console.log(checkAge);

// using reduce
const filtermajor = students.reduce(function (accumilator, element){
    if(element.age === 20){
        return accumilator + 1;
    } else {
        return accumilator;
    }

},0);

console.log(filtermajor);

// using reduce method to get a student detail which have minimun age

const minAge = students.reduce((min, Age) => Age.age < min.age ? Age : min);
console.log(minAge);


// sort: method used to sort elements of an array in place. Sorts elements as string in lexicographic order, not alphabetical lexicographic = (alphabet + numbers + symbols)

let numbers = [10,4,5,3,2,6,9,7,8,1];

console.log(students.sort((a, b) => a.age - b.age));
console.log(students.sort((a, b)=> a.name.localeCompare(b.name)));

// Date
const time = new Date( 2024, 0, 1, 2, 4, 5);
console.log(time);

// closure
function outer(){

    let message = "Hello";

    function display(){
        console.log(message);
    }
    display();
}

outer();

//  setTimeout()
// setTimeout(()=> window.alert("Hello, Bishal"), 6000);


// error handling
// try
// catch
// finally

try{
    console.log(x);
}

catch(error){
    console.log(error);
}
finally{
    console.log("it execute finally");
}

console.log("It doesn't interrupt any program");


// Dom = Document object model
document.title = "My Website";
console.log(document.body.style.backgroundColor =  "white");
console.dir("My website");

const username = "";
const message = document.getElementById("message");

message.textContent += username === "" ? 'Bishal' : username; 




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
// map()
// filter()
// reduce()
// setTimeout()
// function as a expression
// arrow function
// object
// this
// constructor
// tofixed(arguement) (to get a decimal)
// class
// static
// method
// super keyword
// Inheritance 
// Getter & Setters
// Destructuring
// Nested Objects 
// Arrays of objects
// sorting
// shuffle an array
// Dates : this represents dates and time and we can manipulate it 
// closures : A function defined inside  of another functions, the inner function has access to the variable  and scope of the outer functions.
// setTimeout()
// module
// synchronous = executes line by line consecutively in a sequential manner code that waits for an operation to complete.
// asynchronous = allows multiple operations to be performed concurrently without waiting Doesn't block that execution flow and allows the program to continue (I/O operation, network requests, fetching data Handled with: callbacks, Promises, Async?Await)
// error handling =An object that is created to represent a problem that occurs occur often with user uinput or establishing a connection
//DOM
// element selector
// getelementbyid

















// my project is to make a program which helps to conver the Temperature conversion program ...... done
// my project is to make dice roller  
// my project is to make random number game ..... done
// my project is to generat a random password  .... currently working 











