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
    if(acc[curr.Age]){
        (acc[curr.Age])=++acc[curr.Age]

    }else{
        (acc[curr.Age])=1      //reduce helps to findout that how many ages are more than one or more!!
    }
    return acc
},{})

console.log(outPut)