//한번만 등장한 문자 

function solution(s) {
    var answer = {};
    var result = []
    for(i=0; i<s.length; i++){
       let char=s[i]
       answer[char] = (answer[char] || 0) + 1;
    }
    for (let key in answer) {
        if (answer[key] === 1) {
          result.push(key);
        }
      }
    return result.sort().join('');
}
console.log(solution("hello"))