function solution(brown, yellow) {
    const total = brown + yellow;
    for (let height = 1; height <= yellow; height++) {
        const width = Math.floor(yellow / height);
        if (yellow % width === 0 && (width + 2) * (height + 2) === total)
            return [width + 2, height + 2];
    }
}


