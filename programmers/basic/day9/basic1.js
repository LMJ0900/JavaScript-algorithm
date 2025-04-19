//배열만들기 5

function solution(intStrs,k, s, l) {
    var answer = [];
    var result = 0
    for(i=0; i<intStrs.length; i++){
       result=Number(intStrs[i].slice(s, s+l))
       if(result>k){
            answer.push(result)
       }
    }
    return answer;
}
