//세로 읽기

function solution(my_string, m, c) {
    var answer = [];
    var result = ''
    for (i = 0; i < my_string.length; i += m) {
        answer.push(my_string.slice(i, i + m));
    }
    for (i = 0; i < answer.length; i++) {
        result+=answer[i][c-1]
    }
    return result;
}
