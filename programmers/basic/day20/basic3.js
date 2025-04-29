//문자열 묶기 

function solution(strArr) {
    var answer = 0;
    var obj = {}
    for(i=0; i<strArr.length; i++){
        (obj[strArr[i].length] == undefined) ? obj[strArr[i].length]=1 : obj[strArr[i].length]+=1
    }
    answer = Math.max(...Object.values(obj))
    return answer;
}
console.log(solution(["a","bc","d","efg","hi"]))