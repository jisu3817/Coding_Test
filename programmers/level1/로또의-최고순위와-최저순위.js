function solution(lottos, win_nums) {
    const result = [];
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const zeroLen = lottos.filter( a => a === 0).length;
    const lottosNum = lottos.filter( b => win_nums.includes(b) > 0).length;   
    result.push(rank[lottosNum], rank[lottosNum+zeroLen]);
    return result.sort();
}

