//문자열의 뒤의 n글자

//풀이 1
function solution(my_string, n) {
    var answer = '';
    answer=my_string.slice(my_string.length-n,my_string.length-n+n)
    return answer;
}

//풀이2
function solution(my_string, n) {
    var answer = '';
    answer=my_string.slice(-n)
    return answer;
}