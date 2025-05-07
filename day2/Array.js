// arr=[1,2,3,4,5,6,7,8,9]

// console.log(arr[0])
// console.log(arr[-1])

// const arr1 = new Array
// ("this", "is", "a", "string")
// console.log(arr1[0])

// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }

// for (x of arr){
//     console.log(x)
// }







// // ---------- Array setup ----------
// let input = prompt("Enter a sentence:");
// let words = input.split(" ");

// let pushed = [...words];
// pushed.push("PushedWord");

// let popped = [...pushed];
// popped.pop();

// let unshifted = [...words];
// unshifted.unshift("StartWord");

// let shifted = [...unshifted];
// shifted.shift();

// let moreWords = ["Extra", "Words"];
// let combined = words.concat(moreWords);

// let joined = words.join(" - ");

// let sliced = words.slice(1, 3);

// let splicedInsert = [...words];
// splicedInsert.splice(2, 0, "InsertedWord");

// let splicedRemove = [...splicedInsert];
// splicedRemove.splice(2, 1);

// let index = words.indexOf("the");

// let hasHello = words.includes("hello");

// let reversed = [...words].reverse();

// let sorted = [...words].sort();

// let filtered = words.filter(word => word.length > 3);

// let mapped = words.map(word => word.toUpperCase());

// let reduced = words.reduce((acc, curr) => acc + " " + curr);

// let found = words.find(word => word.length > 4);

// let everyCondition = words.every(word => word.length > 1);

// let someCondition = words.some(word => word.includes("a"));

// let nestedArray = [words, ["extra", ["deep"]]];
// let flat1 = nestedArray.flat();
// let flat2 = nestedArray.flat(2);



// console.log("Original Array:", words);
// console.log("After push:", pushed);
// console.log("After pop:", popped);
// console.log("After unshift:", unshifted);
// console.log("After shift:", shifted);
// console.log("After concat:", combined);
// console.log("Array joined into string:", joined);
// console.log("Sliced array (1 to 3):", sliced);
// console.log("After splice (insert):", splicedInsert);
// console.log("After splice (remove):", splicedRemove);
// console.log("Index of 'the':", index);
// console.log("Includes 'hello':", hasHello);
// console.log("Reversed array:", reversed);
// console.log("Sorted array:", sorted);
// console.log("Filtered (length > 3):", filtered);
// console.log("Mapped (to uppercase):", mapped);

// console.log("Using forEach:");
// words.forEach((word, index) => {
//   console.log(`${index}: ${word}`);
// });

// console.log("Reduced to sentence:", reduced);
// console.log("First word with length > 4:", found);
// console.log("Every word has length > 1:", everyCondition);
// console.log("Some word has 'a':", someCondition);
// console.log("Flattened (1 level):", flat1);
// console.log("Flattened (2 levels):", flat2);
















// let arr = [109, 223, 23, 77, 9];

// console.log("Original Array:", arr);

// let reversed_Arr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
// //   reversed_Arr.unshift(arr[i]); 
//   reversed_Arr.push(arr[i]); 

// }

// console.log("Reversed Array:", reversed_Arr);








// // Array function 
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.length);           // 5
// console.log(arr.push(6));          // returns new length: 6
// console.log(arr.pop());            // removes and returns last element: 6
// console.log(arr.shift());          // removes and returns first element: 1
// console.log(arr.unshift(0));       // adds to beginning, returns new length: 5
// console.log(arr.splice(2, 1));     // removes 1 item at index 2: [3]
// console.log(arr.sort());           // sorts in-place: [0,2,4,5]
// console.log(arr.reverse());        // reverses in-place: [5,4,2,0]
// console.log(arr.fill(9, 1, 3));    // fills with 9 from index 1 to 2: [5,9,9,0]
// console.log(arr.copyWithin(0, 2, 4)); // copies 9,0 to beginning: [9,0,9,0]

// console.log(arr.concat([10, 11])); // returns new array: [9,0,9,0,10,11]
// console.log(arr.slice(1, 3));      // returns sub-array: [0,9]
// console.log(arr.includes(9));      // true
// console.log(arr.indexOf(9));       // 0
// console.log(arr.join('-'));        // "9-0-9-0"
// console.log(arr.toString());       // "9,0,9,0"
// console.log([[1], [2, 3]].flat()); // [1, 2, 3]
// console.log([1, 2].flatMap(x => [x, x * 2])); // [1, 2, 2, 4]

// console.log(arr.forEach(x => console.log(x))); // prints each element, returns undefined
// console.log(arr.map(x => x * 2));              // [18, 0, 18, 0]
// console.log(arr.filter(x => x > 0));           // [9, 9]
// console.log(arr.reduce((a, b) => a + b));      // 18
// console.log(arr.every(x => x >= 0));           // true
// console.log(arr.some(x => x === 0));           // true
// console.log(arr.find(x => x === 9));           // 9
// console.log(arr.findIndex(x => x === 0));      // 1

// // Static Array methods
// console.log(Array.isArray(arr));               // true
// console.log(Array.from("hello"));              // ['h', 'e', 'l', 'l', 'o']
// console.log(Array.of(1, 2, 3));                // [1, 2, 3]




// arr=[1,2,3,4,5,6,7]
// arr.forEach((x,y,z,a) => {
//     console.log("index "+x)
//     console.log(" Value "+y)
//     console.log(" Array "+z)
//     // console.log(x,y,z)
    
// });



// arr=[1,2,3,4,5,6,7]
// arr.forEach((x,y,z) => {
//     console.log(x)
    
// });


// let arr = [1, 2, 3, 4,5,6,7,8,9,10];

// let mp = arr.map((x, y, z) => {
//     console.log(x * 2); 
//     console.log(y);     
//     console.log(z);     
// });

// console.log(mp); 


// let getEvenNumbers = function(arr) {
//     arr.filter((x, y, z) => {
//         if (x % 2 === 0) {
//             console.log(x);
//         }
//     });
// };

// getEvenNumbers(numbers);

// let func = (x, y, z) => {
//     if (x % 2 === 0) {
//         console.log(x); // Log the even number
//     }
// };

// arr.filter(func)

// let arr=["abc","def"]
// let arr2=["ghi","jkl"]

// for(x of arr2){
//     arr.push(x)
// }
// console.log(arr)





//  create a function that takes two numbers and num1 and num2  and an array  arr  and returns  an array  containing  all the numbr  arr greater than num1 and  lss than num2  





// function Greater_than_lessthan(array, num1, num2) {
//     let Array1 = array.filter(x => x > num1 &&  x < num2);
//     console.log(Array1);  
// }


// let arr = [1, 5, 10, 15, 20, 25, 30];
// let num1 = 10;
// let num2 = 20;

// Greater_than_lessthan(arr, num1, num2);  

// // using of iteration and iterator 
// arr=[1,2,3,4,5,6,7,89,0]
// let itr = arr[Symbol.iterator]();
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())



 




















