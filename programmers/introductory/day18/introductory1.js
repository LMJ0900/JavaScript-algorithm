//문자열 안에 문자열 

function solution(str1, str2) {
    var answer = 0;
    if(str1.includes(str2)){
        answer=1
    }else{
        answer=2
    }
    return answer;
}