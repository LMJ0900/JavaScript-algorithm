//문자열 잘라서 저장하기 

function solution(myString) {
    const answer = myString.split('x')
    const result = answer.filter(value => value !== '');
    return result.sort();
}
console.log(solution("axbxcxdx"))