// Weird parts of javaScript
// Hoisting

// console.log(a);
// printHello();

// let a = 12;
// function printHello() {
//   console.log("Hello");
// }

for (let index = 0; index <= 10; index++) {
  // Do something
}
// console.log(index);

// const PI = 3.14;
// PI = 3.12;
// let num = null;
// console.log(typeof null);

const obj = {
  a: 1,
  b: "Hello",
  c: { d: 5 },
  e: function () {
    console.log("E is called");
  },
};

console.log(obj.e.name);

// obj.e = "Bye";
// console.log(obj);

// Weird part of JS
// pass by value, pass by reference
// let obj1 = { a: 1 };
// let obj2 = obj1;
// obj2.b = 4;

// console.log(obj1);

// let obj = { a: 1 };
// obj = { b: 2 };

// function printName() {
//   console.log("Hi, I am abhilash");
// }
// printName.a = "Hello";

// console.log(printName.name);

// Arrays
const arr = [1, 2, 3];
arr.push();

let e = function () {};
