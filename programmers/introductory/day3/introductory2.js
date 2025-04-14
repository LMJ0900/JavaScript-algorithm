//중앙값 구하기

function solution(array) {
    var answer = array.sort((a,b)=>a-b)
    var len = Math.floor(answer.length/2)
    return(answer[len])
}