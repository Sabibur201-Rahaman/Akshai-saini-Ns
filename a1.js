function a() {
    var b = 30;
    c();
//   console.log(b)
  function c() {
    console.log(b)
  }
}
a();
