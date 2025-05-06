

console.log("hello world")
let str = "this the \"string\""
console.log(str)



f3=str.at(0)
console.log(f3)


// Get length of string
console.log(str.length);              

// Get character at index
console.log(str.charAt(0));            

// Get Unicode of character at index
console.log(str.charCodeAt(0));         

// Convert to upper and lower case
console.log(str.toUpperCase());       
console.log(str.toLowerCase());       

// Find index of first match
console.log(str.indexOf("s"));          

// Find index of last match
console.log(str.lastIndexOf("s"));     

// Check if string includes a substring
console.log(str.includes("to"));            

// Replace part of string
console.log(str.replace("Ashu", "Raju")); 

// Trim whitespace
let s = "  hello world  ";
console.log(s.trim());                  

// Split string into array
console.log(str.split("t"));            

// Repeat string
console.log(str.repeat(2));            

// Check if string starts or ends with
console.log(str.startsWith("Ash"));    
console.log(str.endsWith("sh"));       

// doing slice c
console.log(str.slice (0,-4))
// Extract substring
console.log(str.substring(0, 4)); 
