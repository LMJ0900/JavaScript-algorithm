//중복된 숫자 세기

function solution(array, n) {
  var answer = 0;
  for(i=0; i<array.length; i++){
    if(array[i]==n){
      answer++
    }
  }
  return answer;
}