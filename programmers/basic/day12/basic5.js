//배열 조각하기

function solution(arr, query) {
    var answer = [];
    for(i=0; i<query.length; i++){
        if(i==0){
            answer=arr.slice(0,query[i]+1)
        }else if(i%2==1){
            answer=answer.slice(query[i],answer.length+1)
        }else {
            answer=answer.slice(0,query[i]+1)
        }
    }
    return answer;
}
