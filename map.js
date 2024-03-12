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

const outPut=users.filter((x)=>x.Age<30).map((x)=>x.FirstName)

console.log(outPut)