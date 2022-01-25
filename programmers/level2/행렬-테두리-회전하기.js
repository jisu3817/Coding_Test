function solution(rows, columns, queries) {
    const answer = [];
    const grid = Array(rows).fill().map((row, i) => Array(columns)
            .fill().map((column, j) => i * columns + j + 1));

    queries.forEach(query => {
        const [x1, y1, x2, y2] = query.map(element => element - 1);
        const queue = [];
        
        for (let i = 0; i < y2 - y1; i += 1) queue.push(grid[x1][y1 + i]);
        for (let i = 0; i < x2 - x1; i += 1) queue.push(grid[x1 + i][y2]);
        for (let i = 0; i < y2 - y1; i += 1) queue.push(grid[x2][y2 - i]);
        for (let i = 0; i < x2 - x1; i += 1) queue.push(grid[x2 - i][y1]);
        
        queue.unshift(queue.pop());
        answer.push(Math.min(...queue));
        
        for (let i = 0; i < y2 - y1; i++) grid[x1][y1 + i] = queue.shift();
        for (let i = 0; i < x2 - x1; i++) grid[x1 + i][y2] = queue.shift();
        for (let i = 0; i < y2 - y1; i++) grid[x2][y2 - i] = queue.shift();
        for (let i = 0; i < x2 - x1; i++) grid[x2 - i][y1] = queue.shift();
    });
    
    return answer;
}

