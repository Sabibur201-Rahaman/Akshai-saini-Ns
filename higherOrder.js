const radius = [1, 5, 4, 6, 3];

function area(radius) {
  return Math.PI * radius * radius;
}                                          //this is higher order function where any function can inputed as an argument and return from a function and can receive to anothe function

function surface(radius) {
  return 2 * Math.PI * radius;
}
const calculate = function (array, logic) {
  const output = [];
  for (let i = 0; i <= array.length; i++) {
    output.push(logic(array[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, surface));
