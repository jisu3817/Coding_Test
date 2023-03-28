const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const boxSize = input.shift().split(" ");

const SIZE_X = Number(boxSize[0]);
const SIZE_Y = Number(boxSize[1]);

const box = [];
const queue = [];

for (let i = 0; i < SIZE_Y; i += 1) {
  const arr = input[i].split(" ").map(Number);

  box.push(arr);

  let idx = -1;

  while (true) {
    idx = arr.indexOf(1, idx + 1);

    if (idx === -1) break;
    queue.push([i, idx]);
  }
}

let idx = 0;

function bfs() {
  while (queue.length !== idx) {
    const y = queue[idx][0];
    const x = queue[idx][1];

    const xIdx = [0, 0, 1, -1];
    const yIdx = [-1, 1, 0, 0];

    for (let j = 0; j < 4; j += 1) {
      const nextY = y + yIdx[j];
      const nextX = x + xIdx[j];

      if (nextX < 0 || nextY < 0 || nextX >= SIZE_X || nextY >= SIZE_Y)
        continue;
      if (box[nextY][nextX] === 0) {
        queue.push([nextY, nextX]);
        box[nextY][nextX] = box[y][x] + 1;
      } else if (box[nextY][nextX] === "") {
        queue.push([nextY, nextX]);
        box[nextY][nextX] = box[y][x];
      }
    }
    idx += 1;
  }
}

bfs();

let result;

for (const arr of visited) {
  if (arr.includes(0)) {
    result = -1;
    break;
  }
}

if (result === undefined) result = Math.max(...visited.flat()) - 1;

console.log(result);
