//부분 문자열 이어 붙여 문자열 만들기

function solution(my_strings, parts) {
    var answer = []
    for(i=0; i<parts.length; i++){
        answer.push(my_strings[i].slice(parts[i][0],parts[i][1]+1)) 
    }
    return answer.join('')
}
