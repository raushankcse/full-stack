// what is a callback function in javascript

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y){
//   console.log("x");
//   y();
// }

// x(function y(){
//   console.log("y");
// })

 



// Javascript is a synchronous and single-threaded language





// Blocking the main thread


// Power of Callbacks?

// Deep about Event listeners


// Closures Demo with Event listener


// Scope Demo with Event listeners


// Garbage Collections & removeEventListeners



function attachEventListeners(){
  let count = 0;

  document.getElementById("clickMe")
  .addEventListener("click", function xyz(){
    console.log("button clicked", ++count);
  })
}

attachEventListeners();