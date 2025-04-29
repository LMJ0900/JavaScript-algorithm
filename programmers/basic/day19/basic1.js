//세 개의 구분자

function solution(myStr) {
    var answer = [];
    answer=myStr.replaceAll('a','!')
    answer=answer.replaceAll('b','!')
    answer=answer.replaceAll('c','!')
    answer=answer.split('!')
    const result = answer.filter(value => value !== '');
    if(result==false){
        result.push('EMPTY')
    }
    return result;
}
console.log(solution("cabab"))