function solution(record) {
    const userIdsNickNames = {};
    let result = [];
    
    record.forEach((process) => {
        const [act, userId, nickName] = process.split(' ');
        
        if (act === 'Enter') {
            userIdsNickNames[userId] = nickName;
            result.push({[userId] :`님이 들어왔습니다.`});
        }
        else if (act === 'Leave') {
            result.push({[userId]: `님이 나갔습니다.`});
        }
        else {
            userIdsNickNames[userId] = nickName;
        }
    })
    
    result = result.map((msg) => {
        return userIdsNickNames[Object.keys(msg)] + msg[Object.keys(msg)];
    })
 
   return result;
}
