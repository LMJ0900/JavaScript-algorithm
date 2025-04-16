//배열 만들기 2

function solution(l, r) {
    var answer = [];
    for(i=l; i<=r; i++){
        num=String(i)
        if([...num].every(ch => ch === '0' || ch === '5')){
            answer.push(i);
        }
    }
    return(answer.length > 0 ? answer : [-1])
}