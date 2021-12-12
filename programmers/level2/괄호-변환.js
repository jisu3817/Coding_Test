function solution(p) {
    let answer = '';
    let left = 0;
    let right = 0;
    let isNum = true;

    if (!p[0]) return '';

    for (let i = 0; i < p.length; i += 1) {
        if (p[i] === '(') left ++;
        else right ++;

        if (right > left) isNum = false;

        if (right === left) {
            if (isNum) return p.slice(0, i + 1) + solution(p.slice(i + 1, p.length));
            else {
                const reverse = p.slice(1, i).split('').map(bracket => bracket === '(' ? ')' : '(').join('');
                
                return '(' + solution(p.slice(i + 1, p.length)) + ')' + reverse;
            }
        }
    }
}
