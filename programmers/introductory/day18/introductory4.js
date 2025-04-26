//문자열 정렬하기 (2)

function solution(my_string) {
    var answer = '';
    answer=my_string.toLowerCase()
    return answer.split('').sort().join('');
}
console.log(solution("Bcad"))