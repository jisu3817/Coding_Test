function solution(s) {
     const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (arr[arr.length - 1] !== s[i]) {
            arr.push(s[i]);
        }
        else arr.pop();
    }
    if (!arr.length) return 1;
    else return 0;
    
}

