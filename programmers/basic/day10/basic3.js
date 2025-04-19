//문자열 뒤집기

function solution(my_string, s, e) {
    var answer = '';
    var result = ''
    answer=my_string.slice(s,e+1).split('').reverse().join('')
    result = my_string.slice(0, s) + answer + my_string.slice(e+1);
    return result;
}
