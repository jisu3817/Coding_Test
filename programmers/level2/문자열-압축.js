function solution(s) {
    const sLen = s.length;
    const answer = [sLen];
    for (let i = 1; i <= Math.floor(sLen / 2); i++) {
        let cnt = 1;
        let subStr = '';
        for (let j = 0; j < sLen; j += i) {
            const first = s.substring(j, j + i);
            const second = s.substring(j + i, j + i * 2);
            if (first === second) cnt++;
            else {
                if (cnt === 1) subStr += first;
                else {
                    subStr += cnt + first;
                    cnt = 1;
                }
            }
        }
        answer.push(subStr.length);
    }
    return Math.min(...answer);
}

