function solution(w, h) {
    
    function euclidean (w, h) {
        const mod = w % h;
        
        if (mod === 0) return h;
        return euclidean (h, mod);
    };
    
    return w * h - (w + h - euclidean(w, h));
}

