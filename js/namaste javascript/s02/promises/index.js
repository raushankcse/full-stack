const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId ){
//   proceedToPayment(orderId);

// });

// const promise = createOrder(cart);

// // {data: orderDetails } 

// promise.then(function(orderId ){
//   proceedToPayment(orderId);
// });
 


// const GITHUB_API = "https://api.github.com/users/raushankcse"

// const user = fetch(GITHUB_API);


// console.log(user);

// user.then(function(data){
//   console.log(data);
// })






// createOrder(cart, function(orderId){

//   proceedToPayment(orderId, function(paymentInfo){

//     showOrderSummary(paymentInfo, function (){

//       updateWalletBalance();
    
//     });

//   });

// });



// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((paymentInfo) =>updateWalletBalance(paymentInfo));






// create a promise

createOrder(cart)
  .then(function(orderId){
    console.log(orderId);
    return orderId;
  })
  .then(function(orderId){
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo){
    console.log(paymentInfo);
  })
  .catch(function (err){
    console.log(err.message);
  })
  .then(function (orderId){
    console.log("No matter what happens, I will definitely be called.");
  })
  


// Producer

function proceedToPayment(orderId){
  // 
  return new Promise( function(resolve, reject){
    resolve("Payment Successful");
  })
}

function createOrder(cart){


  const pr = new Promise(function(resolve, reject){
    // createOrder
    // validateCart
    // orderId
    if(!validateCart(cart)){
      const err = new Error("cart is not valid");
      reject(err);
    } 

    // logic for createOrder
    const orderId = "12345";
    if(orderId){
      setTimeout( function(){
        resolve(orderId);

      }, 5000);
    }
    


  }); 

  return pr;

}

function validateCart(cart){
  return true;
}