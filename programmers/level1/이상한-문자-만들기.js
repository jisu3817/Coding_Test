function solution(s) {
    return s.split(' ').map(word) => {         
                    let answer = '';
                    for (let i = 0; i < word.length; i++) {    
                         if (i % 2) answer += word[i].toLowerCase();
                         else answer += word[i].toUpperCase();
                     }
    return answer;
    }).join(' ');
}

