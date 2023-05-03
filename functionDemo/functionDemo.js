// functions are blocks of code that are designed to perform specific tasks
// functions are invoked when something calls it

/*
    function nameOfFunction(optional parameters)
    {
        statement(s);
        statement(s);
        statement
    }
*/

// simple output functions
function printHello()
{
    // display a message in the id named 'printHello'
    document.getElementById("printHello").innerHTML = "Hello There!";
}

// call the printHello function
printHello();

// this function accepts two values as parameters
function addition(a, b)
{
    // a and b are parameters that can be used in the function statements
    // local bariable that holds the sum of the values
    var s = a + b;

    // return the calculated value of the sum (local variable)
    return s;
}

// call on the function and store the result in a variable
var sum = addition(3, 5);

// place the sum into the output id named 'addition' in our HTML
document.getElementById("addition").innerHTML = "3 + 5 = <b>" + sum + "</b>";

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// JS Built-in functions
let longDecimalValue = 2313.32796278;
// use Math.floor() to round a value down, Math.ceil() to round a value up
let roundedDown = Math.floor(longDecimalValue);
let roundedUp = Math.ceil(longDecimalValue);

// display the rounded values in the ID named 'rounded'
document.getElementById("rounded").innerHTML = longDecimalValue + "rounded up using Math.ceil(): <b>" + roundedUp + "</b> <br>" + longDecimalValue + "rounded down using Math.floor(): <b>" + roundedDown + "</b>"

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// array of strings
var fruits = ["Apple", "Orange", "Banana", "Cherry", "Strawberry", "Mango"];

// variable that will hold the string version of the array
var output = "[";

// use a loop to access the items in the array and add to the output string
for (var i = 0; i < fruits.length; i++)
{
    // add on the text to the output
    if (i != fruits.length - 1)
        output += fruits[i] + ", "; // if not at the last index of the array
    else
        output += fruits[i] + "]"; // if we do get to the last index in the array

}

// output the output string to the ID named "arrayContents1"
document.getElementById("arrayContents1").innerHTML = output;

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// make an empty array and then generate random number to populate the array
var numbers = [];

// use .floor() and .random() to generate a series of values (between 1 and 10)
var count = 5 + Math.floor(Math.random() * 11); // Math.random() generates a decimal between 0 and 1. Multiplying it by 11 generates a decimal between 0 and 10. Math.floor rounds your max number down to 10
// use a for loop to add count number to the array .push()
for (var i = 0; i <= count; i++)
{
    numbers.push(Math.floor(Math.random() * 100)); // generates a value between 0 and 100 and adds it to the array
}

// generate the output again, this time using the .forEach() method
output = "[";

numbers.forEach((number, index) => {
    if (index != numbers.length - 1)
        output += numbers[index] + ", ";
    else
        output += numbers[index] + "]";
});

document.getElementById("arrayContents2").innerHTML = output;

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// function that multiplies a value
/*
function timesThree(value)
{
    return value * 3;
}
*/

// use .map() to apply an inline function ot an array and make a copy of the array with modified contents
var timesThree = numbers.map(function(number){
    return number * 3;
})

// generate the output again
output = "[";

timesThree.forEach((number, index) => {
    if (index != timesThree.length - 1)
        output += timesThree[index] + ", ";
    else
        output += timesThree[index] + "]";
});

document.getElementById("arrayContents3").innerHTML = output;

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// use the .sort() function, pass in a function of sorting attributes
var sorted = numbers.sort(function sortFunction(a, b) {
    // where a and b are values in adjacent sequential indexes
    return b - a; // Places the values in descending order when used with the .sort() function. Compares the second and first number and re-orders them in descending order.
});

output = "[";

sorted.forEach((number, index) => {
    if (index != sorted.length - 1)
        output += sorted[index] + ", ";
    else
        output += sorted[index] + "]";
});

document.getElementById("arrayContents4").innerHTML = output;

// ----------------------------------------------------------------------------------------------------------------------------------------- //

// can also use .reverse() function to reverse order of the elements
// can also use .slice() function to get a subset of an array

// grab the first four items from the sorted array
var sliced = sorted.slice(0, 4);

output = "[";

sliced.forEach((number, index) => {
    if (index != sliced.length - 1)
        output += sliced[index] + ", ";
    else
        output += sliced[index] + "]";
});

document.getElementById("arrayContents5").innerHTML = output;
