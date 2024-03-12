const users = [
  {
    FirstName: "sabibur",
    LastName: "Rahaman",
    Age: 30,
  },
  {
    FirstName: "Jasim",
    LastName: "Hosen",
    Age: 25,
  },
  {
    FirstName: "Miraj",
    LastName: "sk",
    Age: 25,
  },
];

const outPut=users.reduce(function(acc,curr){
if(curr.Age<30){
acc.push(curr.FirstName)
}
return acc
},[])

console.log(outPut)