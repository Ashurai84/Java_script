// //Multiple Inheritance
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }



// class Model extends Car {
//     constructor(brand, mod , func) {
//         console.log("this from chld Class")
//         super(brand);
//         this.func=func

//     this.model = mod;
//     }
//     get md(){
//         return this.mode=x
//     }
//     set md(x){
//         this.model = x 
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let func =() => {
//     console.log( "hello");
// }

// let myCar = new Model("Ford","Mustang" , func());
// myCar.md =" bmw"

// console.log(myCar.show())




// function person(fname, lname){
//     let firstname = fname;
//     let lastname = lname;

//     let getDetails_noaccess = function(){
//         return (`first name is: ${firstname},lastname is: ${lastname}`);
//     };

//     this.getDetails_access = function(){
//         return (`first name is: ${firstname},lastname is: ${lastname}`);
//     };
// }

// let person1 = new person(' ashu', ' rai');

// console.log(person1.firstname);             
// console.log(person1.getDetails_noaccess);    
// console.log(person1.getDetails_access());    


 
//  // // wap to javascript program  to create  a clas  callled  rectangle  wirth properties  for hieght and widht . inculde  two  method  to calculate  rectangle area  and perimeter


//   class Rectangle {
//     constructor() {
//       this.width = 3;
//       this.length = 4;
  
//       this.area = function () {
//         return (this.width * this.length);
//       };
  
//       this.perimeter = function () {
//         return 2 * (this.width + this.length);
//       };
      
//     }
//   }
  
//   let calc = new Rectangle();
//   console.log("Area: " + calc.area());
//   console.log("Perimeter: " + calc.perimeter());















class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
  
    makesound() {
      console.log("Sound: " + this.sound);
    }
  }
  
  class Dog extends Animal {
    constructor(species, sound, color) {
      super(species, sound);
      this.color = color;
    }
  
    makesound() {
      console.log("This is the sound of the dog: " + this.sound);
    }
  }
  

  let myDog = new Dog("Dog", "Bark", "Brown");
  

  myDog.makesound();  // Output: This is the sound of the dog: Bark
  

  