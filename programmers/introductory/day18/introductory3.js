//세균 증식 

function solution(n, t) {
  var answer = n;
  for(i=0; i<t; i++){
    answer*=2
  }
  return answer;
}
console.log(solution(2,10))