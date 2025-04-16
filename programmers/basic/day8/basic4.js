//9로 나눈 나머지

function solution(number) {
    var answer = ''
    var result = 0
    for(i=0; i<number.length; i++){
        answer=number[i]
        result+=Number(answer)
    }
    return(result = result % 9) ;
}
