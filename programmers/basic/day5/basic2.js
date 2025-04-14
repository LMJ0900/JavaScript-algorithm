//등차수열의 특정한 항만 더하기

function solution(a, d, included) {
    a=3
    d=4
    included=[true, false, false, true, true]
    var answer = 0;
    for(i=0; i<included.length; i++){
        if(included[i]==true){
            answer+=(a+d*i)
        }
    }
    console.log(answer)
}
solution()