// function strings_are_same(str1 , str2 ){
//   return str1==str2;}


//   let first_input = prompt("Enter the first string");
//   let second_input = prompt("enter the second value :")

//   let result_be = strings_are_same(first_input , second_input)

//   console.log("Are the number are same ", result_be)



 
   
  

// let arr = ["hello", " IS " ," THIS" ,"BMW"]
// function findindexinarray (find){
//   console.log(find)
// }
//  f1= prompt("Enter the  array  to show ")
//  console.log(f1)
// console.log(arr.indexOf(f1))




// In Javascript if we declare only one argument in a function and gives n number of inputs it will ignore all the inputs and take only first one. It does not throw any error.
// eg:-
function demo(num1,num2,num3){
  console.log(num1)
}
console.log(demo(2,3,4))

function demo2(...num1)
{
  console.log(num1)

}
demo2(2,3,4,5,6,7)

