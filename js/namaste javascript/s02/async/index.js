/*
 * What is async ?
 * What is await ?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch

*/

const API_URL = "https://api.github.com/users/raushankcse"

async function handlePromise() {

  try {
    
    const data =  await fetch(API_URL);
  
    const jsonValue = await data.json()
  
    console.log(jsonValue );
  } catch (err) {
    console.log(err );
    
  }
   

}

handlePromise();





// const p = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });







// await can only be used inside an ansyc function
// async function handlePromise(){
//   console.log("Hello World!!");
  
//   const val = await p;
//   console.log("Namaste javascript");

//   console.log(val);

//   const val2 = await p2;
//   console.log("Namaste javascript");

//   console.log(val2);
// }


// handlePromise();


// function getData(){
//   p.then(res => console.log(res));
//   console.log("namaste javascript");
  
// }


// getData();














// // always returns a promise
// async function getData() {
//   return "Namaste";
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

  
