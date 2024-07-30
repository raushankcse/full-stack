
// function outest(){
//   var c = 20;
//   function outer(b){
  
//     function inner(){
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var close = outest()("helloworld");
// close();

// function counter(){
//   var count = 0;
//   function incrementCounter(){
//     count++;
//     console.log(count);
//   }
// }

// var counter1 =  counter()
// counter1();
// counter1();

// var counter2 = counter();
// counter2();

// counter2();counter2();


// function Counter(){
//   var count = 0;
//   this.incrementCounter = function (){
//     count++;
//     console.log(count);
//   }
//   this.decrementCounter = function(){
//     count--;
//     console.log(count);
//   }
// }


// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();


// function a(){
//   var x = 0, z=10;
//   return function b(){
//     console.log(x);
//   }
// }

// var y = a();

// y();