
// const arr = [5, 1 , 3, 2, 6];

// reduce


const users = [
  {firstName: "akshay", lastName: "saini", age:26},
  {firstName: "donald", lastName: "trump", age: 75},
  {firstName: "elon", lastName: "musk", age: 50},
  {firstName: "deepika", lastName: "padukone", age: 26},
];

const output = users.filter((x)=> x.age < 30)
.map((x)=>x.firstName);

console.log(output);




// const output = users.reduce(function(acc, curr){
//   if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age];
//   } else{
//     acc[curr.age]=1;
//   }
//   return acc;
// }, {});

// console.log(output);


// 






// list of full names

// ["akshay saini", "donald trump"...]

// const output = users.map(x=>x.firstName + " " + x.lastName);

// console.log(output);












// function findMax(arr){
//   let max = 0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//       max = arr[i];
//     }
//   }
//   return max;
// }



// console.log(findMax(arr));


// const output = arr.reduce(function(acc, curr){
//   if(curr> acc){
//     acc = curr;
//   }
//   return acc;
// },0);

// console.log(output);



// const output = arr.reduce(function(acc, curr){
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);













// // filter......

// function greaterThan4(x){
//   return x>4;
// }

// function isEven(x){
//   return x%2===0;
// }






// const output = arr.filter((x)=>{
//   return x<4;
// } );

// console.log(output);




// map...........

// function double(x){
//   return x*2;
// }

// function triple(x){
//   return x*3;
// }

// function binary(x){
//   return x.toString(2);
// }


// const output = arr.map(binary);


// const output = arr.map((x)=>x.toString(2));

// console.log(output);

