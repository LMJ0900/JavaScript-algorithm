//문자열 섞기

function solution(str1, str2) {
    var answer = []
    for(i=0; i<str1.length; i++){
        answer[i]=str1[i]+str2[i]
    }
    return(answer.join(''))
}