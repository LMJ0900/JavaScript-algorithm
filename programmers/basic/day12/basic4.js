//2의 영역
function solution(arr) {
    var answer = [];
    for(i=0; i<arr.length; i++){
        if(arr[i]==2){
            answer.push(i)
        }
    }
    if(answer.length==0){
        return [-1]
    }else if(answer.length==1){
        return [2]
    }else{
        return answer=arr.slice(answer[0],answer[answer.length - 1]+1)
    }
}
