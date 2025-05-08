function statement( name1 , name2 ) {

    console.log(name1)
    return
    console.log(name2)   
}
statement("my name is ashutosh ", " b tech cse ")





//  generator functions 
function* gen(){               // we can change the star position funtion* gen ->  funtion *gen 
    console.log("hello")
    yield 1;
    console.log("world")
    yield 2;
    console.log("goodbye")}
const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
 

// // printing the pattern 
let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += " o ";
    }

    console.log(row);
}

