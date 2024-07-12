//passing by reference
let obg = { firstName: "Ahmed", age: 99 };

function changeName(obg) {
  obg.age = 100;
  return "age updated";
}

console.log(obg, "before passing it");
console.log(changeName(obg));
console.log(obg, "after passing it");

//passing by value
// function doubleNum(x) {
//   return x * x;
// }

// let x = 999;

// console.log(doubleNum(x));
// console.log(x);

// function processForm() {
//   let userName = document.getElementById("name").value;
//   alert("Hello, " + userName + "!");
//   return false;
// }

// let btn = document.getElementById("btn");

// btn.onclick = function () {
//   alert("click");
// };

// let text = prompt("enter your name");
// document.write(text);
// console.log(text);
