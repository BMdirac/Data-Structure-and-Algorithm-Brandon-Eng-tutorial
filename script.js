// ******************************************  FINAL LEARNING PHASE **********************************************************************


/* 
'ctrl + back tick' to open new terminal
then type 'ls' and press enter (to make sure you are in the right path)
then type 'node script.js' and press enter (to run the js code)
note that script.js is the name of our file so it depend on the file name.
or press the run button at the top right corner of the environment (vs code)
*/

/*********************************************  ARRAYS *******************/

// let myFirstArray = []; // how to initialize an array
// // push() is used to add data into the array
// myFirstArray.push(3);
// myFirstArray.push(4);
// myFirstArray.push("Beng");
// myFirstArray.push(true);
// console.log(myFirstArray.length)
// console.log(myFirstArray);
// console.log(myFirstArray[0]); // to access an array we use index ( first index starts at zero)
// let value = myFirstArray.pop() // to remove the last data of an array (note that pop can be assign to a variable)
// console.log(myFirstArray.length)
// console.log(value)
// console.log(myFirstArray)

// // note that we can use the length of the array to dictate how many times we want the for loop to run
// for (let i = 0; i < myFirstArray.length; i++) {
//     console.log("i", i);
//     console.log("value", myFirstArray[i]);
// }
// // note that for loop breaks out rather than displaying undefined value

// // for loop that can be used specifically for arrays
// // to print out values without caring about what index they were we use the 'for of loop'
// for (let value of myFirstArray) {
//     console.log(value);
// }

/*********************************************  SETS *******************/

// // sets is a powerful tool if you are trying to find unique value
// let myFirstSet = new Set()
// myFirstSet.add(3);
// myFirstSet.add(3);
// myFirstSet.add(4);
// myFirstSet.add('Beng');
// myFirstSet.add(true);
// console.log(myFirstSet); // 3 is only added once that is the power of set

// // 'delete' is used to remove a data from set
// myFirstSet.delete('Beng');
// // 'size' is used to determine the length of data in set
// console.log(myFirstSet.size)

// // we can also use for of loop here
// for (let value of myFirstSet) {
//     console.log(value);
// }

// // use has() to check if it has a specific data
// console.log(myFirstSet.has('Beng'));
// console.log(myFirstSet.has(4));

/*********************************************  MAPS *******************/

/*
the thing you put into the map is called the key and the thing
the map split out is called the value

Essentially a map allows you to connect a key to a value
*/

// let myFirsMap = new Map();
// // 'set()' is used to add data to map
// myFirsMap.set("red", 1)
// myFirsMap.set("blue", 7)
// console.log(myFirsMap);
// // 'get()' is used to get a value for a key from a map
// console.log(myFirsMap.get("blue"))
// // note that you cannot have multiples of the same key
// // all of the key have to be unique ( just like all of the data have to be unique in set)

// // we can also use 'size' to determine the size of map
// console.log(myFirsMap.size);

// // we can also use 'delete' a specific key-value pair from a map
// console.log(myFirsMap);
// myFirsMap.delete("red");
// console.log(myFirsMap);

// // to use 'for of loop' in map we have to use the function keys()
// for (let key of myFirsMap.keys()) {
//     console.log("key", key) // to get key
//     console.log("Value", myFirsMap.get(key)) // to get value
// }

// // to see if there is an associated key inside a map use has()
// console.log(myFirsMap.has("blue"))
// console.log(myFirsMap.has("red"))


// ****************************************** LEARNING PHASE 1 **********************************************************************

// QUEUE and STACK are implemented using an array
// Class implementation makes it a lot simpler for us to do FIFO and LIFO

/*********************************************  QUEUE (FIFO); First In First Out *******************/

// class Queue {
//     // constructure allow us to create one instance of a queue (e.g if we want to create one line of a queue)
//     constructor() {
//         this.index = 0; // it keep track of which person we are looking at in the array
//         this.data = []; // collection of information that we were adding into the queue (e.g people waiting to order food)
//     }

//     // to push someone into the end of the array
//     push(value) {
//         this.data.push(value);
//     }

//     // to serve the person at the front of the queue (at index 0)
//     pop() {
//         let value = this.data[this.index];
//         if (this.index < this.data.length) {
//             this.index++; // it's now at index of 1
//         }
//         return value;
//     }
    
//     // a function to fiqure out how many people are in our queue at any given time
//     size() {
//         let length = this.data.length - this.index;
//         return length;
//     }
// }

// // to create a specific instance of queue
// let myLine = new Queue();
// myLine.push("Beng");
// console.log(myLine.size()); // returns 1
// let person = myLine.pop();
// console.log(myLine.size()); // returns 0

/*************************************** STACK (LIFO); Last In First Out *******************/

// class Stack {
//     constructor() {
//         this.data = [];
//     }

//     push(value) {
//         this.data.push(value);
//     }

//     // pop removes the last value from an array 
//     pop() {
//         let value = this.data.pop();
//         return value;
//     }

//     size() {
//         return this.data.length;
//     }
// }

// let myStack = new Stack();
// myStack.push("Beng");
// console.log(myStack.size()); // return 1
// let serve = myStack.pop();
// console.log(myStack.size()); // return 0

// create new stack by calling our constructor function 

/***************************************** SET **********************************/

// to return list of the numbers below without duplicate
// implementing with an array will be inefficient rather we use a for loop
/*
loop through all of this input using a for loop and compare those values
with a number you visited every single time
*/

// let input = [1,2,3,5,2,3,4,2];

// function uniqueValues(input) {
//     // using set constructure to create a new set
//     let unique = new Set()

//     for (let value of input) {
//         console.log("value", value);
//         unique.add(value);
//         console.log("unique", unique);
//     }
//     return unique;
// }

// console.log((uniqueValues(input)));


/***************************************** MAP **********************************/

/* 
SET and MAP are actually similar because the keys 
of map are actually unique
*/

//  task here is to count how many times each name shows up
// let names = ["Beng", "John", "Chris", "John", "Bryan", "Beng", "Michael"]

// function countNames(input) {
//     let counter = new Map();

//     for (let key of input) {
//         if (counter.has(key)) { // we have seen the name before
//             let oldValue = counter.get(key);
//             counter.set(key, oldValue + 1);
//         }
//         else { // we have not seen the name before
//             counter.set(key, 1);
//         }

//         console.log("key", key);
//         console.log("counter", counter);
//     }

//     return counter;
// }

// console.log(countNames(names));
