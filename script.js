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
//     return value;
// }

// console.log((uniqueValues(input)));


/***************************************** MAP **********************************/

/* 
SET and MAP are actually similar because the keys 
of map are actually unique
*/

//  task here is to count how many times each name shows up
let names = ["Beng", "John", "Chris", "John", "Bryan", "Beng", "Michael"]

function countNames(input) {
    let counter = new Map();

    for (let key of input) {
        if (counter.has(key)) { // we have seen the name before
            let oldValue = counter.get(key);
            counter.set(key, oldValue + 1);
        }
        else { // we have not seen the name before
            counter.set(key, 1);
        }

        console.log("key", key);
        console.log("counter", counter);
    }

    return counter;
}

console.log(countNames(names));
