//숫자 찾기

function solution(num, k) {
    var answer = 0;
    str = String(num)
    answer=str.indexOf(String(k))+1
    if(answer==0){
        answer=-1
    }
    return answer;
}
console.log(solution(123456, 7))