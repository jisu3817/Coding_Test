function solution(array, commands) {
    const answer = [];
    for (let idx = 0; idx < commands.length; i++) {      
       const [i, j, k] = [
            commands[idx][0] - 1,
            commands[idx][1], 
            commands[idx][2] - 1
        ];      
        let answers = array.slice(i, j).sort((a, b) => a - b);
        answer.push(answers[k]);
    }
return answer;

