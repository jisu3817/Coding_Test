function solution(s) {
    const ss = s.split("");  
    let len = ss.length;
    if (len % 2 === 0) {        
        const startNum = (len / 2);      
        return ss[startNum - 1] + ss[startNum];
    }
    else {
        const Num = (len + 1) / 2 - 1;
        return ss[Num];
    }
}


