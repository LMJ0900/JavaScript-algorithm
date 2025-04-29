//7의 개수
function solution(array) {
    var answer = 0;
    var temp = 0
    answer = array.join('')
    for(i=0; i<answer.length; i++){
        if(answer[i]==7){
            temp++
        }
    }
    return temp;
}
console.log(solution([7, 77, 17]))