//가까운 1 찾기

function solution(arr, idx) {
    var answer = 0;
    var a = []
    a=arr.slice(idx)
    for(i=0; i<a.length; i++){
        if(a[i]==1){
            answer=i+Number(idx)
            break;
        }else{
            answer=-1
        }
    }
    return answer;
}
