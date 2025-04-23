//원하는 문자열 찾기 

function solution(myString, pat) {
    var answer = 0;
    str1=myString.toLowerCase()
    str2=pat.toLowerCase()
    if(str1.includes(str2)){
        answer=1
    }else{
        answer=0
    }
    return answer;
}
