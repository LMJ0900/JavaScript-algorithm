//n의 배수 고르기 

function solution(n, numlist) {
    var answer = [];
    for(i=0; i<numlist.length; i++){
        if(numlist[i]%n==0){
            answer.push(numlist[i])
        }
    }
    return answer;
}
console.log(solution(5,[1, 9, 3, 10, 13, 5]))