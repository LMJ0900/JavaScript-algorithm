//배열의 원소만큼 추가하기

function solution(arr) {
    var answer = [];
    for(i=0; i<arr.length; i++){
        temp=Number(arr[i])
        for(j=0; j<temp; j++){
            answer.push(temp)
        }
    }
    return answer;
}
console.log(solution([5, 1, 4]))