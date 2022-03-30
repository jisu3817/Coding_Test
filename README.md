### 🔎 문제 소스
	- 백준:https://www.acmicpc.net/
	- 프로그래머스:https://programmers.co.kr/learn/challenges

<br>
<br>

❗️백준 - Node.js 입력 받기 (fs 모듈)

<br>

- 한 줄 입력

```jsx
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

<br>

- 여러 줄 입력

```jsx
const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin')
	.toString().split('\n')
	.slice(0, -1)
	.map((value) => Number(value));
```

