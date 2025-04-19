//배열 만들기 1

function solution(n, k) {
    var answer = [];
    for(i=1; k*i<=n; i++){
        answer.push(k*i)
    }
    return answer;
}
