// function food() {
//   let item = "Pizza";

//   function drink() {
//     let liquid = "Coke";

//     function dessert() {
//       console.log(item);   // ?
//       console.log(liquid); // ?
//     }

//     dessert();
//   }

//   drink();
// }

// food();

// **********************closures***************

// function x() {
//   var a = 2;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(">>>>>",z);
// z()

// let a = 8;
// function whole (){
// return function sum() {
//   return a * a;
// }
// }

// var z =whole();
// console.log("><><", z());

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// ************set timeout****************

// setTimeout(function(){
//     console.log("kalu")
// },5000)

// function nameOne(func){
//     console.log("Ankush")
//     func()
// }
// nameOne(function(){
//     console.log("Ankit")
// })

// // ***************Event Listiner************
// let add = 0;
// document
//   .getElementById("count")
//   .addEventListener("click", function () {
//     console.log("button clicked", add++);
//   });

// *************** Event Listener ***************
// let count = 0;
// document.getElementById("btn").addEventListener("click", function () {
//   console.log("button clicked", ++count);
// });

// **********circle*************

// const radius = [3, 5, 9, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// const circumferences = function (radius) {
//   return 2 * Math.PI * radius;
// };
// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output
// };

// console.log("Area",calculate(radius,area))
// console.log("Circumference",calculate(radius,circumferences))
// console.log("Diameter",calculate(radius,diameter))

// ****************map filter reduce ************

// const arr = [2, 4, 6, 5, 3, 9, 8];

// function isOdd(x) {
//   return x % 2;
// }
// const output = arr.filter(isOdd);

// console.log("orginal",arr,"updated",output);

// function max(arr) {
//   let max = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log("hhhka", max(arr));

// const output = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log("jiji", output);

// const users = [
//   { id: 1, name: "Alice", age: 25, role: "admin", active: true },
//   { id: 2, name: "Bob", age: 19, role: "user", active: false },
//   { id: 3, name: "Charlie", age: 32, role: "user", active: true },
//   { id: 4, name: "Daisy", age: 28, role: "manager", active: false },
//   { id: 5, name: "Ethan", age: 45, role: "admin", active: true },
//   { id: 6, name: "Fiona", age: 22, role: "user", active: true },
// ];

// const output = users.filter((x) => !x.active && x.age < 30).map((x) => x.name);
// console.log("output", output);

// const redoutput = users.reduce(function (acc, curr) {
//   if (curr.age < 30 && !curr.active) {
//      acc.push(curr.name);
//   }
//   return acc;
// }, []);
// console.log("output", redoutput);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Alice" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "Daisy" },
//   { id: 5, name: "Ethan" },
//   { id: 6, name: "Fiona" },
// ];

// const output = users.filter(function (user, userindex) {
//   return users.indexOf(user) === userindex;
// });
// console.log("ojj", output);

// *************** callbackhell*****************

// let cart = ["shoe", "pant", "jacket"];

// createOrder(cart, function (orderId) {
//   proceedToPaymey(orderId, function (paymentId) {
//     orderSummary(paymentId, function (paymentId) {
//       console.log("order successfull");
//     });
//   });
// });

// const arr = ["Ankush", "Ankush", "Amit", "Amit", "sumit", "vikas"];

// const output = new Set(arr);

// console.log("output", output);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Alice" },
//   { id: 4, name: "Charlie" },
//   { id: 4, name: "Daisy" },
//   { id: 5, name: "bob" },
//   { id: 6, name: "Bob" },
// ];
// // const output = new Set(users);
// const output = users.filter(
//   (user, index, self) =>
//     index === self.findIndex((current) => current.name === user.name)
// );

// const uniqueArrayByName = users.filter(
//   (obj, index, self) => index === self.findIndex((o) => o.name === obj.name)
// );

// console.log("output", output);
// console.log("output", uniqueArrayByName);

// **********pratice filter*****************

// const people = [
//   { id: 1, name: "Alice", age: 25, role: "admin", active: true },
//   { id: 2, name: "Bob", age: 19, role: "user", active: false },
//   { id: 3, name: "Charlie", age: 32, role: "user", active: true },
//   { id: 4, name: "Daisy", age: 28, role: "manager", active: false },
//   { id: 5, name: "Ethan", age: 45, role: "admin", active: true },
//   { id: 6, name: "Fiona", age: 22, role: "user", active: true },
// ];

// active user
// const output = people.filter((user) => user.active);
// console.log(">>>", output);

// rolea admin user
// const output = people.filter(
//   (user, index, self) =>
//     index === self.findIndex((curr) => curr.role === user.role)
// );
// console.log(">>>", output);
const arr =[
    {
        name:"ankush",
        age:23,
    },
    {
        name:"ankush",
        age:25,
    },
    {
        name:"amit",
        age:23,
    },
    {
        name:"sumit",
        age:23,
    },
    ]
const output = arr.filter((users,index,self)=>index===self.findIndex((curr)=>curr.name===users.name))
console.log("Try programiz.pro",output)


for(i=0;i<1000;i++){
    document.getElementById("my element").innerHTML+=1
}