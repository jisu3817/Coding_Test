function solution(nums) {
    const pickNum = nums.length / 2;
    const realNums = nums.filter((element, idx) => nums.indexOf(element) === idx).length;

    return realNums > pickNum ? pickNum : realNums;
}

