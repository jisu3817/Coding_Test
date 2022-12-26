let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const node = Number(input[0]); // 총 노드 개수
const edge_num = Number(input[1]); // 총 배열 길이

// 노드 개수 + 1에 해당하는 만큼의 graph 생성
let graph = [...new Array(node + 1)].map(() => []);
// 이미 방문한 노드인지 확인하기 위함.
let visited = [...new Array(node + 1)].fill(0);
// 결과
let result = 0;

// graph 생성
for (let i = 0; i < edge_num; i += 1) {
  let start = Number(input[i + 2].split(" ")[0]);
  let end = Number(input[i + 2].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

visited[1] = 1;

function dfs(start) {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      result += 1;
      dfs(end);
    }
  }
}

dfs(1);
console.log(result);
