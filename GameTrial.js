let randomNumber = Math.random();
console.log(randomNumber);
//Math.random is used in javascript to generate random floating points(o-intrusive to 1-exclusive)
//Combining Math.floor(converts to the nearest interger)
// and Math.random helps to generate whole numbers

let wholeNumber = Math.floor(Math.random());
console.log(wholeNumber);
//Make sure to include the brackets after random and floor

const x = Math.ceil(Math.random() * 10);
console.log(x);

var y = Math.floor(Math.random()*31);
console.log(x);

//Logical operators
//&&(AND) - Used when two or more conditions are to work simultaneously. Its primarily used to make sure that certain conditions are met before moving forward in a program(Precise)

//||(OR) - Will execute a code if one property is true or meets the conditions. Focuses on atleast one condition met to be true.  It's commonly employed in scenarios involving fallback values, checking multiple conditions, or form validation where any of several fields need to be filled.

//!(NOT)  it turns true into false and false into true
 
let username = "john_doe";
let password = "";

if (username || password) {
console.log("Form submitted successfully!");
} else {
console.log("Please fill in both username and password.");
}

let userName = "john_doe";
let passWord = "";

if (username && password) {
console.log("Form submitted successfully!");
} else {
console.log("Please fill in both username and password.");
}

console.log(!true);
// Its just like saying not true but using an exclamation sign

//Truthy and falsy values
//Booleans do not work on conditions only they work with truthy and falsy values that also work with logical operators(falsy inludes NaN, undefined , null , empty strings , false and 0)

//SHOrTCUT OPERATORS for if statements
//Ternary operator , Guard operator , Default operator


