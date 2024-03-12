// b()   // it is a function expression and it not under hoisting so it throw an error so there are defference between statement and expression
a(); //this is a function statement which i can call before initialising that is the power of hoisting

//function statement
function a() {
  console.log("a statement called ");
}
// function expression
var b = function () {
  console.log("b expression is called");
};

// firstClass function
var c = function (param1) {
  //first class function is a function which has ability to return an anonymous function or store its value to a variable
  console.log(param1);
  return function z() {};
};
console.log(c(20));
