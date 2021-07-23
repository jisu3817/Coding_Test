function solution(numbers, target) {
    let cnt = 0;
 
    function dfs(depth, sum) {

        if (depth === numbers.length) {
            if(sum === target) cnt ++;
            return;
        }

        dfs(depth + 1, sum + numbers[depth]);
        dfs(depth + 1, sum - numbers[depth]);
    }

    dfs(0, 0);
    return cnt;
}
