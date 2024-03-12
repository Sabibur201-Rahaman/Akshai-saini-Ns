setTimeout(function() {
console.log('this is timer')
},2000)
function x(z) {
  console.log("x");
  z();
} //there are two functions function x and function z function x is called inside the function and function z is called into the x function
//function x has sent the argument to the x through x where x is called and function z is called into the x function, so this is a call back function


x(function z() {
  console.log("i am from z");
});
