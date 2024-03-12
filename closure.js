function x() {
    var a = 10;
   return function y() {
    console.log(a)
    }
    // return y; // Return the inner function y()
  }
  
  var z = x();
  z(); // Call z, which is the inner function y, to get the result
  
  