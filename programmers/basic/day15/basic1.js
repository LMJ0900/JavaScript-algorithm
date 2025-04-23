//조건에 맞게 수열 변환하기1
function solution(arr) {
    var answer = [];
    for(i=0; i<arr.length; i++){
        if(arr[i]%2==0&&arr[i]>=50){
            answer.push(arr[i]/2)
        }else if(arr[i]%2==1&&arr[i]<50){
            answer.push(arr[i]*2)
        }else{
            answer.push(arr[i])
        }
    }
    return answer;
}
console.log(solution([1, 2, 3, 100, 99, 98]))