//배열의 길이에 따라 다른 연산하기

function solution(arr, n) {
    var answer = [];
    if(arr.length%2!==0){
        for(i=0; i<arr.length; i++){
            if(i%2==0){
                answer.push(arr[i]+n)
            }else{
                answer.push(arr[i])
            }
        }
    }else{
        for(i=0; i<arr.length; i++){
            if(i%2!==0){
                answer.push(arr[i]+n)
            }else{
                answer.push(arr[i])
            }
        }
    }
    return answer;
}
console.log(solution([444, 555, 666, 777],100))
