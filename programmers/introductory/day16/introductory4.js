//배열의 유사도

function solution(s1, s2) {
    var answer = 0;
    for(i=0; i<s1.length; i++){
        if(s2.includes(s1[i])){
            answer++
        }
    }
    return answer;
}
console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]))