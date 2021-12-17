function solution(str1, str2) {
    const regexp =  /^[a-z]*$/;
    
    let multipleSet1 = str1.toLowerCase().split('').map((str, i, str1) => str + str1[i + 1]);
    let multipleSet2 = str2.toLowerCase().split('').map((str, i, str2) => str + str2[i + 1]);
    
    multipleSet1.pop();
    multipleSet2.pop();
    
    multipleSet1 = multipleSet1.filter(el => regeEx.test(el));
    multipleSet2 = multipleSet2.filter(el => regeEx.test(el));
    
    const set = new Set([...multipleSet1, ...multipleSet2]);
    let union = 0;
    let intersection = 0;
    
    set.forEach(item => {
        const has1 = multipleSet1.filter(el => el === item).length;
        const has2 = multipleSet2.filter(el => el === item).length;
        
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    });
    
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}

