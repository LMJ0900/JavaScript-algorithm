//두 수의 연산값 비교하기

function solution(a, b) {
    answer = ''
    if(String(a)+String(b)>2*a*b){
        answer=Number(String(a)+String(b))
    }else{
        answer=2*a*b
    }
    return(answer)
}