function solution(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null,arr)), 1);
    if (!arr.length) return [-1];      
    return arr;
}

