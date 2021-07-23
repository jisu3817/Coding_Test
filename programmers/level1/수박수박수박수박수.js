function solution(n) {
    let suBak = "" ;
    for (let i = 1; i <= n; i++) 
        suBak += i % 2 ? "수" : "박";   
    return suBak;
}


