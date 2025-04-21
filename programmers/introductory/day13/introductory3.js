//중복된 문자 제거

function solution(my_string) {
    var a = []
    var answer = '';
    for(i=0; i<my_string.length; i++){
        if(!a.includes(my_string[i])){
            answer+=my_string[i]
        }
        a.push(my_string[i])
    }
    return answer;
}
