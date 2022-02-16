function solution(board, moves) {
    let result = 0;
    const basket = [];
    
    moves.map(move => {
        const craneLocation = move - 1;
        
        for (let i = 0; i < board.length; i += 1) {
            const target = board[i][craneLocation];
            
            if (target) {
                if (basket[basket.length - 1] === target) {
                    basket.pop();
                    result += 2;
                }
                else basket.push(target);
                board[i].splice(craneLocation, 1, 0);
                break;
            }
        };
    });
    return result;
}
