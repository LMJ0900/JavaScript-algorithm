// 문자열 곱하기
//풀이1
function solution(my_string, k) {
    var answer = [];
    for(i=0; i<k; i++){
        answer[i]=`${my_string}`
    }
   
    return(answer.join('')) 
}
//풀이 2
function solution(my_string, k) {
    answer=my_string.repeat(k)
     return(answer)
 }
 