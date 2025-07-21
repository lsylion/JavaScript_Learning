let x,y,z;
x = 10;
y = 20;
z = x + y;
console.log("The sum of x and y is: " + z);
// print using template literals
console.log(`x=${x}, y=${y}, z=${z}`);
// print using string concatenation

// using a for loop
for(let i = 0; i < 5; i++) {
    console.log("i=" + i);
}   

// create and interger array
let intArray = [1, 2, 3, 4, 5];

// print the array using a for loop
for(let i = 0; i < intArray.length; i++) {
    console.log("intArray[" + i + "] = " + intArray[i]);
}

