function solution(absolutes, signs) {
    return absolutes.reduce((acc, value, curIndex) => {
         return signs[curIndex] ? acc + value : acc - value
    }, 0);
}

