//암호 해독

function solution(cipher, code) {
    var answer = [];
    for(i=code-1; i<cipher.length; i+=code){
        answer.push(cipher[i])
    }
    return answer.join('');
}
console.log(solution("dfjardstddetckdaccccdegk",4))