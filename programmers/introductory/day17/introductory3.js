//자릿수 더하기

function solution(n) {
  var a = String(n).split('')
  var answer = 0;
  for(i=0; i<a.length; i++){
    answer+=Number(a[i])
  }
  return answer;
}
console.log(solution(1234))