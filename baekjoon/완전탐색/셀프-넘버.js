const decompose = [];
const arr = [];

for (let i = 1; i < 10001; i += 1) {
  arr.push(i);
}

for (let i = 1; i < 10001; i += 1) {
  const constructor = i;
  const n = parseInt(constructor
    .toString()
    .split('')
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur))) + constructor; 

  if (n > 10000) break;
  decompose.push(n);
}

const a = arr.filter(element => !decompose.includes(element));

for (let i = 0; i < a.length - 3; i += 1) {
  console.log(a[i]);
}