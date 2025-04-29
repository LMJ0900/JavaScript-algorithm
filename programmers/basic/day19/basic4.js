//배열 만들기6

function solution(arr) {
    var answer = [];
    for(i=0; i<arr.length; i++){
        if(answer.length==0){
            answer.push(arr[i])
        }else{
            if(answer[answer.length-1]==arr[i]){
                answer.pop()
            }else{
                answer.push(arr[i])
            }
        }
    }
    return answer.length!==0 ? answer : [-1];
}
console.log(solution([0, 1, 1, 0]))