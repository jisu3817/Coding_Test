function solution(s) {
    const len = s.length;
    if (len === 4 || len === 6) {
        let isNumber = /\D/g.test(s);     
        if( !isNumber) return true;    
        return false;
    }
    return false;
}

