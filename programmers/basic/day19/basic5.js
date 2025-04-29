//무작위로 K개의 수 뽑기

function solution(arr, k) {
    var answer = [];
    answer = [...new Set(arr)]
    while (answer.length < k) {
        answer.push(-1);
    }
     return answer.slice(0, k);
}
console.log(solution([0, 1, 1, 1, 1],4))