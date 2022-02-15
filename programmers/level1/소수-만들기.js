function getCombinations(nums, selectNumber) {
    const results = [];
    if (selectNumber === 1) return nums.map((el) => [el]);

    nums.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); 
        const combinations = getCombinations(rest, selectNumber - 1); 
        const attached = combinations.map((el) => [fixed, ...el]); 

        results.push(...attached); 
    });

    return results; 
};

function solution(nums) {
    let result = 0;
    const combinationList = getCombinations(nums, 3);
    
    combinationList.map(threeNumArr => {
        const sum = threeNumArr.reduce((acc, cur) => acc + cur);
        const squareRoot = Math.floor(Math.sqrt(sum));
        const arr = Array.from(new Array(Math.floor(squareRoot) - 1), (x,i) => i + 2);
        
        const notPrimeLen = arr.map(value => {
            if (sum % value === 0) return true;
            else return false;
        }).filter(value => value).length;
        
        if (!notPrimeLen) result += 1;
    });
    
    return result;
}

