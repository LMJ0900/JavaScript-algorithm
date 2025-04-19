//문자열 앞에 n글자

function solution(my_string, n) {
    var answer = '';
    answer = my_string.slice(0,n)
    return answer;
}
console.log(solution("ProgrammerS123",11))