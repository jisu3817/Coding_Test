function solution(s) {
    const answer = [];
    const tupples = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
        .sort((a, b) => a.length - b.length)
    
    tupples.map((tupple, idx) => {
        let i = 0;
        
        while (tupple.length > 1) {
            const idx = tupple.indexOf(answer[i]);
            
            tupple.splice(idx, 1);
            i += 1;
        }
        
        answer.push(tupple[0]);
    });
    
    return answer;
}

