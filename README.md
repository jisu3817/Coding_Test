### ๐ ๋ฌธ์  ์์ค
	- ๋ฐฑ์ค:https://www.acmicpc.net/
	- ํ๋ก๊ทธ๋๋จธ์ค: https://programmers.co.kr/learn/challenges

<br>
<br>

โ๏ธ ๋ฐฑ์ค - Node.js ์๋ ฅ ๋ฐ๊ธฐ (fs ๋ชจ๋)

<br>

- ํ ์ค ์๋ ฅ

```jsx
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input);

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

<br>

- ์ฌ๋ฌ ์ค ์๋ ฅ

```jsx
const fs = require('fs');
const input = fs
	.readFileSync('/dev/stdin')
	.toString().split('\n')
	.slice(0, -1)
	.map((value) => Number(value));
```

