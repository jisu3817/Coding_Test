function solution(numbers, hand) {
    const phoneNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    let leftPosition = [3, 0];
    let rightPosition = [3, 2];
    let result = '';

    hand = hand.charAt(0).toUpperCase();

    for (let i = 0; i < numbers.length; i++) {
        let nowNum = numbers[i];
        
        for (let j = 0; j < phoneNum.length; j++) {
            if (phoneNum[j][0] === nowNum ) {
                result += 'L';
                leftPosition = [j, 0];
            }
            else if (phoneNum[j][2] === nowNum) {
                result += 'R';
                rightPosition = [j, 2];
            }
            else if (phoneNum[j][1] === nowNum){
                let middlePosition = [j, 1];
                const leftToMiddle = Math.abs(leftPosition[0] - middlePosition[0]) + Math.abs(leftPosition[1] - middlePosition[1]);
                const rightToMiddle = Math.abs(rightPosition[0] - middlePosition[0]) + Math.abs(rightPosition[1] - middlePosition[1]);
                
                if (leftToMiddle < rightToMiddle) {
                    result += 'L';
                    leftPosition = [j, 1];
                }
                else if (leftToMiddle > rightToMiddle) {
                    result += 'R';
                    rightPosition = [j, 1];
                }
                else {
                    result += hand; 
                    hand === 'L' ? leftPosition = [j, 1] : rightPosition = [j, 1];
                }
            }
        }
    }
    return result;
}
