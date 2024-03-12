// var a=100  // this is global scope/window scope and it is shadowing also
let b = 200;
{
  // var a=120;
  let b = 20;
  const c = 30;
  // console.log(a)
  // console.log(b)
  // console.log(c)
}

console.log(
  `let keyword here defined as a Script that is unable to shadowing the blockScope:${b}`
);
console.log(`var that is global scope:${a}`);

// let x=30 //it defines illegal shadowing
// {
//     var x=20
// }

var x = 20; //it is liggal shadowing due to global scope of var
{
  let x = 50;
}

