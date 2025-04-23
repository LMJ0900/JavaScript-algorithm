//3 6 9 게임

function solution(order) {
    var answer = 0;
    var str = String(order)
    console.log(str)
    for(i=0; i<str.length; i++){
        if(['3','6','9'].includes(str[i])){
            answer++
        }
    }
    return answer;
}
console.log(solution(29423))