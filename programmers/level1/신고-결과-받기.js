function solution(id_list, report, k) {
    const obj = {};
    const answer = new Array(id_list.length).fill(0);
    
    
    report.map((value, idx) => {
        const users = value.split(' ');
        
        if(!obj[users[1]]) obj[[users[1]]] = [];
        obj[users[1]].push(users[0]);
    })
    
    for (const reported in obj) {
        const reporter = [...new Set(obj[reported])];
        
        if (reporter.length >= k) {
            reporter.map(value => answer[id_list.indexOf(value)] += 1);
        }
    }
    
    return answer;
}
