function solution(places) {
    const answer = places.map(place => {
        const result = place.some((row, i) => {
            return row.split('').some((column, j, rowArr) => {
                if (column === 'X') return false;
                
                const userCnt = [
                    rowArr[j - 1] || null, 
                    rowArr[j + 1] || null,
                    (place[i - 1] || '').charAt(j),
                    (place[i + 1] || '').charAt(j)
                ].filter(user => user === 'P').length;
                
                if ((column === 'P' && userCnt > 0) || (column === 'O' && userCnt >= 2)) return true;
                return false;
            });
        });
        
        return result ? 0 : 1;
    });
    
    return answer;
}
