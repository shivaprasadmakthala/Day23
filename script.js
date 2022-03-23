// promises an example

// function Suman(data) {
//     console.log(data);
// }

// //create a promise
// let suman_promise = new Promise(function(resolve, reject) {
//     //promise code body 
//     let number = 99;
//     if(number%2 == 0){
//         resolve("EVEN NUMBER");
//     }else {
//         reject("ODD NUMBER");
//     }
// });

// //call the promise , PROMISE CONSUMING CODE
// suman_promise.then(
//     function(value) {
//         //when the promise is successfull
//         Suman(value);
//     },
//     function(error) {
//         // when the promise is failure
//         Suman(error);
//     }
// );


// let my_promise = new Promise(function(resolve, reject) {
//     let condition = Even;
//     if(condition is met) {
//         resolve("when the promise is kept and fulfilled")
//     } else{
//         reject("when the promise is not kept");
//     }
// });

////////////////////////////////////////////////////////////////

//CODE without promise & callback also

// const url = "https://api.thedogapi.com/v1/breeds";
// //Display function
// function Suman(data) {
//     console.log(data);
// }

// //fetching the data from the API

// function Guvi(url, my_callback_function){
//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = function(){
//         if(request.status == 200){
//             my_callback_function(this.responseText);
//         } else {
//             my_callback_function(request.status);
//         }
//     };
//     request.send();
// }

// //calling the callback function Guvi() which calls Suman() Function as an argument

// Guvi(url, Suman);

////////////////////////////////

//SAME CODE WITH PROMISE

// let suman_promise = new Promise(function (resolve, reject) {
//     // code to be executed 

//     let request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = function(){
//         if(request.status == 200){
//             resolve(request.responseText);
//         } else {
//             reject(request.status);
//         }
//     };
//     request.send();
// });

// suman_promise.then(
//     function (value) {
//       Suman(value);
//     },
//     function (error) {
//       Suman(error);
//     }
//   );

////////////////////////////////////////////////////////////////

// const url = "https://pokeapi.co/api/v2/pokemon?limit=50";

// function Suman(data) {
//     let Suman = document.getElementById("suman");
//     // document.getElementById("suman").innerHTML = JSON.stringify(data);

//     Suman.innerHTML = data;
//     console.log(data);
// }

// let suman_promise = new Promise(function (resolve, reject) {
//     //     // code to be executed 
    
//         let request = new XMLHttpRequest();
//         request.open("GET", url);
//         request.onload = function(){
//             if(request.status == 200){
//                 resolve(request.responseText);
//             } else {
//                 reject(request.status);
//             }
//         };
//         request.send();
//     });
    
//     suman_promise.then(
//         function (value) {
//           Suman(value);
//         },
//         function (error) {
//           Suman(error);
//         }
//       );
////////////////////////////////////////////////////////////////


//  how to write a Promise in more Professional Way !

// const url = "https://restcountries.com/v3.1/all";


// function Suman(url) {
//     let suman_promise = new Promise(function (resolve, reject) {
//       let request = new XMLHttpRequest();
//       request.open("GET", url);
//       request.onload = function () {
//         if (request.status == 200) {
//           resolve(request.responseText);
//         } else {
//           reject("Error happened in your Program !");
//         }
//       };
//       request.send();
//     });
//     return suman_promise;
//   }
  
//   let promise = Suman(url);
  
//   const suman_promise_consumer = () => {
//     promise.then(
//       (result) => {
//         console.log({ result });
//       },
//       (error) => {
//         console.log("ERROR : Error with the URL" + error);
//       }
//     );
//   };
  
//   suman_promise_consumer();


  