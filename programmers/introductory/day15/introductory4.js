//약수 구하기

function solution(n) {
    var answer = [];
    for(i=0; i<=n; i++){
        if(n%i==0){
            answer.push(i)
        }
    }
    return answer;
}