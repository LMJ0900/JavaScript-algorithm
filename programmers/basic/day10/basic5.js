//qr code

function solution(q, r, code) {
    var answer = '';
    
    for(i=0; r+(q*i)<code.length; i++){
        answer+=code[r+(q*i)]
    }
    return answer;
}
