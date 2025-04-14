//더 크게 합치기

function solution(a, b) {
    var answer =''
    a=String(a)
    b=String(b)
    if((a+b)>(b+a)){
        answer=(a+b)
    }else{
        answer=(b+a)
    }
    return(Number(answer))
}