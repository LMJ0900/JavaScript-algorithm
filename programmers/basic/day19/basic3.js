//빈 배열에 추가, 삭제하기 

function solution(arr, flag) {
    var answer = [];
    for(i=0; i<arr.length; i++){
        if(flag[i]==true){
            for(j=0; j<Number(arr[i])*2; j++){
                answer.push(arr[i])
            }
        }else{
            for(j=0; j<Number(arr[i]); j++){
                answer.pop()
            }
        }
    }
    return answer;
}
console.log(solution([3, 2, 4, 1, 3],[true, false, true, false, false]	))