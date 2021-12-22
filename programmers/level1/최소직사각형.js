function solution(sizes) {
    sizes.map(size => size.sort((a, b) => a - b));
    
    const wMax = Math.max(...sizes.map(size => size[0]));
    const hMax = Math.max(...sizes.map(size => size[1]));
    
    return wMax * hMax;
}

