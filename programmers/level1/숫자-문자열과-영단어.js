function solution(s) {
    const stringNumArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const onlyNum = Number(s);
    let findNum = [];
    let answer = '';

    if (onlyNum) return onlyNum;
    else {
        for (let i = 0; i < s.length; i++) {
            if (!Number(s[i])) {
                findNum.push(s[i]);
                const stringNum = findNum.join('');

                if (stringNumArr.includes(stringNum)) {
                    const changeNum = stringNumArr.indexOf(stringNum);
                    answer += changeNum;
                    findNum = [];
                }
            }
            else answer += s[i];
        }
    }
    return Number(answer);
}
