//배열 회전 시키기

function solution(numbers, direction) {
    var answer = []
    if(direction=='right'){
       answer= numbers.splice(numbers.length-1,1)
        numbers.unshift(answer[0])
    }else{
        answer= numbers.splice(0,1)
        numbers.push(answer[0])
    }
    return numbers;
}
