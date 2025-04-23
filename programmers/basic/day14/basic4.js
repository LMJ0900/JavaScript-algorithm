//n보다 커질때까지 더하기 

function solution(numbers, n) {
    var answer = 0;
    for(i=0; answer<=n; i++){
       answer += numbers[i]
    }
    return answer;
}
