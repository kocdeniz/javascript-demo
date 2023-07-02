//Functions in javascript

//Q1 -- What is function Declaration

//function square(num){
//   return num*num;
//}

// Below is function ''expression'' which is assigned to a variable

const square = function (num) {
    return num * num;
};

//calling function below

console.log(square(5));




//Q2 -- What are Fist Class Functions?
// Two functions that pass through each other

// function square(num) {
//     return num * num;

// }
// function displaySquare(fn){
//     console.log("Square is " + fn(5))

// }
// displaySquare(square);

 
// Q4 -- What is IIEF? (Immediately Invoked Function Expression.)

// (function square(num){
//     console.log(num * num);
// })(5);

//CLOSURE meaning >> THe ability of a function to access variable and functions that are lexically out of its scope are called closure
// closures are created whenever a new function is created because of function scope.

////////////////////////////////////////////////////////////////////////////////////////////

// Q6 -- Function Scope (global/local scope)

var num1 = 20,
 num2 = 3,
 name = "This is another string value never mind"

 function multiply() {
    return num1 * num2;
 }
 multiply(); // returns 60

 // A nested function exapmle 

 function getScore(){
    var num1 = 2,
    num2 = 3;
 }

 function add() {
    return name + " scored " + (num1 + num2);
  }


////////////////////////////////////////////////////////////////////////////////////////////

// Q7 -- Function Scope - O/P Based Question

//change 'let' value to 'var' to see the difference
for (let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, i * 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////

// -- Q8 Functions Hoisting
// it works on functions
function functionName() {
    console.log("It's me Hi!");

}
functionName(); 

//this is undefined
//console.log(x);

//var x = 5

  
////////////////////////////////////////////////////////////////////////////////////////////

// -- Q9 Params Vs Arguments

function square(num){ // Params is defining a value
    console.log(num *num)

}
// calling a function, the value in parantheses are arguments
square(5);

    
////////////////////////////////////////////////////////////////////////////////////////////

// -- Q10 What is Callback function

// Callback function is a function passed into another function as an argument, which is then invoked 
// inside the outer function to complete some kind of routine or action.

//observe the "name" variable below

function greeting(name) {
    alert('Hello' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);
//greeting is a callback function in here

////////////////////////////////////////////////////////////////////////////////////////////

// --Q11 Arrow function (ES6)

//Without arrow old syntax

const add = function (firstNum , secondNum){
    return firstNum + secondNum;
};

// arrow function of it below

const addarrow = (firstNum , secondNum) => firstNum + secondNum

// arrow functions has some disabilities like don't take local scope

let user = {
    username: "Denis",
    rc1: () => {
        console.log("Getting through" + this.username);
    },
    rc2() {
        console.log("Getting through" + this.username);
    },
};
user.rc1(); // Getting through undefined because 'this' refers to window object instead
user.rc2();



////////////////////////////////////////////////////////////////////////////////////////////






//Closures in javascript
//Lexical Scope mean that a variable defined outside the function can be   
// accesible inside another function defined after a variable declaration

var name = "Let me tell you";

//global scope

function local(){
    //local scope
    console.log(username);

}
local();

// Closure as an example

//global scope
function innerera(){
    var name = "First era";
    //inner scope 2

    function outofera(){
        //inner scope
        alert(name);
    }
    displayName();
}

innerera();


// Closures in Javascript 

// Ques 2: Write a function that would allow you to do this


// QUESTION
// var addSix = createBase(6);
// //add six is now closure with base value of 6 and returns addition operation on any number
// addSix(10); //returns 16
// addSix(21); //returns 27
 
function createBase(num){
    return function(innerNum) {
        console.log(innerNum + num);
};
}


var addSix = createBase(6);
addSix(10); //returns 16
addSix(21); //returns 27

////////////////////////////////////////////////////////////////////////////////////////////

// Closures in Javascript
//Implement Caching
function myMemoize(fn, context){
    const res = {};
    return function (...args){
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]){
          res[argsCache] = fn.call(context || this, ...args)  
        }else{
            return res[argsCache];
                }
    
    };
}
const clumsysquare = (num1,num2) => {
    for(let i = 1; i <= 100000000; i++){
        return num1*num2;
    }
};

console.time("First Call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First Call");



console.time("First Call");
console.log(clumsysquare(9467, 7649));
console.timeEnd("First Call");



WD