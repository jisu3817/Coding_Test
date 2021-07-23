function solution(n, lost, reserve) {
    let realLost = lost.filter(a => !reserve.includes(a));
    let realReserve = reserve.filter(b => !lost.includes(b));
    
    return n - realLost.filter(a => {
        let borrow = realReserve.find(r => Math.abs(r-a) === 1);
        if (!borrow) return true;
        realReserve = realReserve.filter(r => r !== borrow);
    }).length;
}

