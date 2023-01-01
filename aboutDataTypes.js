// Data types
//1 numbers
//2 strings
//3 booleans
//4 numbers
//5 strings
//6 arrays
//7 objects

// Here you will find deeper description of number

// Numbers 
let n = 123;
n = 12.345;
// We have in JS + - / *
// /- it is division


// we can count numbers in console.log and we don't need to make variables
// make it's useless but for learning JS we need to know all details

// example
console.log(50 / 2);

// javascript respects and admit math expressions so we can write like in math

console.log((2 + 4) * 4 / 2);

console.log("======================");

//  besidees regular numbers we hvae infinity; -infinity; Nan= not a Number
// example
console.log(1 / 0);

// when we are dividing string with numbers === Nan === not a Number
console.log("Text" / 15);

// the "n" at the end means it's a BigInt
const BigInt =  1234567890n;
console.log(BigInt);

// + has a lot of functions now we will learn few of them
console.log("======================");
// We can make string into integer by using + and vicy verse

let a = "2365";
let b = +a;
console.log(b);

// if we cant understand the type of varibale we can use type of
/*
The datatype of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined *
*/
console.log(typeof b); // expected output: number

// as i said we can make number into string
let c = 1235;
let makingString = c + "";
console.log(makingString);
console.log(typeof makingString); // expected outpupt string

// We have in JS for numbers some methods

// toString() is another variant to make integer to string
let x2 = 123;
let x1 = x2.toString();
console.log(x1);
console.log(typeof x1);

// it is making round but we have better functions for making it
let x = 9.656;
console.log(x.toFixed(0));


// Math functions
/*
Math.min()

Math.max()

Math.random()

Math.round()

Math.ceil()

Math.pow()

Math.floor()

*/

// By using Math.min() we can write minimum value in array or generally
// examples
console.log("Min values = " + Math.min(2, 3, 1));

// Example in Array
// it creating minimum without using any method we must write it to understand
// the process of that method
let arr1 = [3, 2, 5, 65, 56, 7];
function minVal(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(min < arr[i]){
            arr[i] = min;      
        }
        else{
            min = arr[i];
        }
    }
    return min;
};
console.log("Minimum = " + minVal(arr1));

// so it is way easier than the other one
let arr = [21, 3, 343, 34, 3, 56, 2];
let min = Math.min(arr);
console.log("Minarr = " + Math.min(...arr));


// we can find min like this but there exist way easier methods
Function.apply.min = Math.min.apply(null, arr);
console.log(Function.apply.min);

// Math.max(); we can find maximum value by using it
// example ,

let Arr = [21, 65, 87, 9, 23, 26, 82, 81];
// here we are using spread operator ... it meant whole Arr find the max
let max = Math.max(...Arr);
console.log("Max = " + max);

// We should also write max without method to understand the process
let Arr1 = [32, 57, 83, 94, 34];
function getMax(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(max > arr[i]){
            arr[i] = max;
        }
        else{
            max = arr[i];
        }
    }
    return max;
};
console.log("Maximum = " + getMax(Arr1));

// round()
// The name of this method gives us a hint to understand that this make our
// integer round

let num = 2.5748;
console.log(Math.round(num));
// if num >= 0.5 or smth like that is goes up vice vercy goes down
let num1 = 2.4748;
console.log(Math.round(num1));

// We can use round in Math.random() later i will show you
// the Math.round() of NaN and undefined is NaN
// the Math.round() of null === 0
let Num2 = null;
console.log(Math.round(Num2));


// Math.ceil() is rounding our integer and increasing

let number = 3.0001;
console.log(Math.ceil(number)); // expected output: 4

// Math.floor() is rounding our integer and decreasing

let number2 = 99.9999999;
console.log(Math.floor(number2));

// Math.pow() is making degree 
console.log(Math.pow(2, 3));
// 2is root here and how many time we want to multiply it with him we are writing next to him
// it means 2 * 2 * 2

// here we have also alternative resolution but it rare uses
console.log("It's same " + 2**3);

// Math.sqrt() it find the root
let Sqrt = Math.sqrt(225);
console.log(Sqrt);
console.log(Math.sqrt(9)); // expected output: 3


// And finally one of the most useful math function
// Math.random() the name says everything 
// it's unique math function because we are using in it more than one math methods

let RandomNum = Math.random();
// Writing only Math.random in this situation is useless
// So we have to use Math.floor round or ceil
let random = Math.floor(Math.random() * 10 + 1);
console.log(random);
// We are writing Math.floor for making round after that we are multipling it into 10
// to run it from 0 to 9 by + 1 we make our scope from 0 to 10

// but we can optimise our code by subttituding Math.floor() into Math.round
let random1 = Math.round(Math.random() * 10 + 1);
console.log("Random number is " + random1);

// let make loop for checking the scope of the Random numbers

for(let i = 0; i < 11; i++){
    let random = Math.round(Math.random()* 10 + 1);
    console.log(random);
}

// Thanks for watching:)