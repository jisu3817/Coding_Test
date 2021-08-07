function solution(left, right) {
    let sum = 0;
    for (let i = left; i < right + 1; i++) {
        let cnt = 0;
        for (let j = 1; j < i + 1; j++) {
            if(i % j === 0) cnt++;
        };
        if (cnt % 2 === 0) sum += i;
        else sum -= i;
    };
    return sum;
}

