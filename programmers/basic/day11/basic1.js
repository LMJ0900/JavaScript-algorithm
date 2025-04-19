//문자 개수 세기

function solution(my_string) {
    var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // answer=my_string.toUpperCase().split('').map(char => char.charCodeAt(0) - 64);
    for(i=0; i<my_string.length; i++){
        var code = my_string[i].charCodeAt(0)
        var index = 0
        console.log(code)
        if (code >= 65 && code <= 90) { 
           index = code - 64;
          } else if (code >= 97 && code <= 122) {
            // 소문자 a~z (ASCII 97~122)
            index = code - 96 + 26;
          } else{
           index= code = null
          }
        answer[index-1]++
    }
    return answer;
}
