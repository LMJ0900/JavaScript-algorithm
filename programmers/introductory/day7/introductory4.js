//문자 반복 출력하기


function solution(my_string, n) {
    var answer = '';
    for(i=0; i<my_string.length; i++){
        answer += my_string[i].repeat(n)
    }
    return answer;
}