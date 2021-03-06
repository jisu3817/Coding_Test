function solution(orders, course) {
    let answer = [];
    const getCombinations = (menuArr, selectedNum) => {
        const results = [];

        if (selectedNum === 1) return menuArr.map((value) => [value]);
        menuArr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, selectedNum - 1); 
            const attached = combinations.map((combination) => [fixed, ...combination].sort().join(''));    
            results.push(...attached); 
        });
        return results;
    }

    for (let i = 0; i < course.length; i++) {
        let courseObj = {};
        let max = 0;
        const selectedNum = course[i];

        orders.forEach((order) => {
            const menuArr = order.split('');
            const result = getCombinations(menuArr, selectedNum);

            result.forEach((combination) => {
                if(!courseObj.hasOwnProperty(combination)) courseObj[combination] = 1
                else {
                    courseObj[combination]++;
                    max = max < courseObj[combination] ? courseObj[combination] : max;
                }
            })
        })

        if (max >= 2) {
            for (const [key, value] of Object.entries(courseObj)) {
                if (value === max) {
                    answer.push(key);
                }
            }
        }
    }
    return answer.sort();
}

