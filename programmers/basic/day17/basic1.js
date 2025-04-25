//특정 문자열로 끝나는 가장 긴 부분 문자열 찾기 

function solution(myString, pat) {
    var answer = '';
    var num=myString.lastIndexOf(pat)
    answer=myString.slice(0,num+pat.length)
    return answer;
}
console.log(solution("AAAAaaaa","a"))