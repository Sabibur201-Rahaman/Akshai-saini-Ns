// function x(){
// let i=1
//     setTimeout(()=>{
// console.log(i)     //javascript never wait for 3 seconds which is mentioned in the time 3000 but hello man is loged
//     },3000)
//     console.log('hello man')
// }
// x()

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i){
        setTimeout(() => {
            console.log(i);
          }, i*5000);
    }
   close(i)
  }

  console.log("hello man");
}
x();
