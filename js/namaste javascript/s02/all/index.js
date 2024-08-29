"use strict";

// this in global space

console.log(this);   // globalObject - window, global









// this inside a function
function x() {
  console.log(this);
}



x();
window.x();



const student = {
  name: "Akshay",
  a: 10,
  printName: function(){
    console.log(this.name);
    
  }

}



student.printName();


const student2 = {
  name: "Deepika",

}

// call apply bind methods (sharing mehtods)

student.printName.call(student2)






// this in strict mode - (this substitution)

// this value depends on how this is called (window)

// this inside a object's method







// this inside arrow funciton

// this inside nested aroow funciton

// this inside DOM

