/*
Exercise #1
Initialize an empty array below in the variable numbers.
*/
var numbers; [];


/*
Exercise #2
Using the loop provided for you below, use an array's push method to insert the nummbers  0 to 10 into positions 0 through 10 of the numbers array you just initialized above.'If you're not sure how to use the array push method go back and re read this module on data strucutres.'
*/

for(var i=0;i<10;i++){
    numbers.push(i);
    console.log(numbers);
}


/*
Exercise #3
Test that you used the array push method correctly by printing the sum of the values at position 3 and 6 of the array (use the console.log() function to print to the console). 
The outputted value should be 9.
*/


for(var i=0;i<10;i++){
    numbers.push(i);
    console.log(numbers);
}

function sum(x, y) {
    return x + y;
}

console.log(sum(numbers)[3], numbers[6]);

/*
Exercise #4
Use the console.log() function and the array .pop() to add all the values in the array.
*/

whie(number.legnth != 0){
    var lastElement = number.pop();
console.log(number);
}


/*
Exercise #5
Create an empty object and assign it the variable car below.
*/
var car = {}
    
/*
Exercise #5
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputing property make to the console. You should see the value "black" printed out.
*/


var car = {
    colour: 'black'
}
console.log(car.colour);

