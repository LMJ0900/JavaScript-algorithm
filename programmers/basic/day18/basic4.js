//문자열 바꿔서 찾기 

function solution(myString, pat) {
    var answer = myString
   var result = 0
   answer = myString.replaceAll("A","Temp")
   answer = answer.replaceAll("B","A")
   answer = answer.replaceAll("Temp","B")
    if(answer.includes(pat)){
        result=1
    }else{
        result = 0
    }
    return result
}
console.log(solution("ABBAA","AABB"))
