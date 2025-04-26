//x 사이의 개수 

function solution(myString) {
    var result = []
    var answer = myString.split('x')
    for(i=0; i<answer.length; i++){
        result.push(answer[i].length)
    }
    return result;
}
console.log(solution("xabcxdefxghi"))