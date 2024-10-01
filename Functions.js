function function1 () {
    console.log('Hello');
}

function1();
//Function are made to reuse the code. The function above can only be run by calling/executing it as below. THE FUNCTION MUST BE "CALLED" FIRST BEFORE THE CODE RUNS.

function foo() {
    return 1;
    }
function boo() {
        return ( 1 );
    }

    foo();
    boo();

function square(x) {
let y = x * x;
}

 let squared2 = square(2);
 console.log(squared2);

 let x = Math.round(2.5);
 console.log(x);

 function mine() {
    console.log('Im tired but i have a plan');
 }
 mine();

 function value (parameter1 , parameter2) {
    if (value) {
        console.log('This is a truthy value');
    } else {
        console.log('This is a falsy value');
    }
 }
 value(23, 70);

// function is an object installed in javascript
function great (p1, p2, p3, p4) {
    if (p1 <= p2 && p2 >= p3) {
        console.log('This is true');
    } else if (p3 === p2 || p4 < 6) {
        console.log('this is right');
    } else {
        console.log('This is not quite right');
    }
}
great(12, 33, 45, 2);
great(1, 2, 3, 4);

function trial (number1, number2){
    return (number1 * number2) + 100;
}

console.log(trial(20, 30));
const answer = trial(40, 60);
console.log(answer);

//While the return function gets a value out of a function, a parameter puts a value into the function
function calculateTax () {

}
