//ad 제거하기 

function solution(strArr) {
    var answer = [];
    for(i=0; i<strArr.length; i++){
        if(strArr[i].indexOf("ad")==-1){
            answer.push(strArr[i])
        }
    }
    return answer;
}
console.log(solution(["and","notad","abcd"]))