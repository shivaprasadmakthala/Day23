// Async and await
// Fetch()  API

//Example-1

// async function Suman(){
//     return "suman gangopadhyay";
// }
// console.log(Suman());

// Suman().then(function(data){
//     console.log(data);
// });

//Exapmle-2

// async function Suman(data){
//     return "suman gangopadhyay"+" "+data;
// }
// console.log(Suman());

// Suman('bangalore').then(function(data){
//     console.log(data);
//     document.write(data);
// });


// Write the same code in arrow Function

// let suman = async() => {
//     return "I live in Delhi";
// }

// suman().then(data=>console.log(data));

///////////////////////////////////////////////////////////////////

//even or odd using async function

// async function Suman(){
//     let number = 56;
//     if(number%2 == 0){
//         return "Even number";
//     } else{
//         return "odd number";
//     }
// }
// console.log(Suman());

// Suman().then(function(data){
//     console.log(data);
// })

//even or odd using arrow function

// let EvenOdd = async() => {
//     let number = 98;
//     if(number%2 == 0){
//         return "Even number";
//     } else {
//         return "odd number"
//     }
// }

// EvenOdd().then(data=> console.log(data));

////////////////////////////////

// async function Suman(){
//     let data = await "my name is suman and iam from the async AWAIT world!";
//     console.log(data);
// }
// console.log("pizza");
// Suman();
// console.log("Burger")

// ///////
// const guvi = async () => {
//     let info = await "Hello iam from Guvi!";
//     console.log(info);
// }
// console.log('A');
// guvi();
// console.log('B');


////////////////////////////////

// Promise Chaining

// let suman_promise = new Promise(function (resolve, reject) {
//     let data = "nitin";
//     resolve(data + " " + "is the project manager");
//     reject(data + " " + "outsider");
//   });
  
//   suman_promise
//     .then((value) => {
//       console.log("promise fulfilled");
//     })
//     .catch((error) => {
//       console.log("promise rejected");
//     })
//     .finally(() => {
//       console.log("DEAL Closed !!");
//     });

////////

// // Fetch Data from Github API using Promise Chaining
// const url = "https://api.github.com/users/";

// // function will load the data from the URL
// function load_data(url) {
//     return fetch(url).then((response) => response.json());
// }

// function Suman(name1) {
//     return load_data(`https://api.github.com/users/${name1}`);
// }

// function display(url) {
//     return new Promise(function(response, reject){
//         let github_pic = document.createElement("img");
//         github_pic.src = url.avatar_url;
//         document.body.append(github_pic);
//     });
// }

// // loading the data into the HTML
// load_data(url)
//   .then((user) => Suman('sgangopadhyay'))
//   .then(display)