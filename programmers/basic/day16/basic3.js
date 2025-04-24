//배열에서 문자열 대소문자 변환하기

function solution(strArr) {
    var answer = [];
    for(i=0; i<strArr.length; i++){
        if(i%2==0){
            answer.push(strArr[i].toLowerCase())
        }else{
            answer.push(strArr[i].toUpperCase())
        }
    }
    return answer;
}
console.log(solution(["AAA","BBB","CCC","DDD"]))