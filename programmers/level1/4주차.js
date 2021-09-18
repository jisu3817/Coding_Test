function solution(table, languages, preference) {
    const jobs = {};
    let answer = [];
    
    for (let i = 0; i < languages.length; i++) {
        const language = languages[i];
        const languagePreference = preference[i];
        
        for (let j = 0; j < table.length; j++) {
            let sub = 0;
            const jobScore = table[j].split(" ");
            const score = 6 - jobScore.indexOf(language);
            console.log(score);
            sub += score * languagePreference;
            jobs[jobScore[0]] = sub;
        }
    }
    console.log(jobs);
    console.log(answer);
    const max = Math.max(...answer);
    return jobs[answer.indexOf(max)];
}

