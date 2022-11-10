const fs = require("fs");
const train = fs.readFileSync("/dev/stdin").toString().split("\n");

let remainPerson = [];
let nowPerson = 0;

train.pop();

for (const move of train) {
  const outPerson = parseInt(move.split(" ")[0]);
  const inPerson = parseInt(move.split(" ")[1]);

  nowPerson = nowPerson - outPerson + inPerson;
  remainPerson.push(nowPerson);
}

console.log(Math.max.apply(null, remainPerson));
