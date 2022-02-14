function solution(expression) { 
    const operators = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-'],
    ];
    
    const values = [];

    operators.map(operatorArr => {
        const fomula = expression.split(/(\D)/);
        
        for (let operator of operatorArr) {
            while (fomula.includes(operator)) {
                let result = 0;
                const idx = fomula.indexOf(operator);
                const operand1 = +fomula[idx - 1];
                const operand2 = +fomula[idx + 1];
                
                if (operator === '-') result = operand1 - operand2;
                else if (operator === '+') result = operand1 + operand2;
                else result = operand1 * operand2;
                
                fomula.splice(idx - 1, 3, result);
            }
        }
        values.push(Math.abs(fomula[0]));
    })
    return Math.max(...values);
}
