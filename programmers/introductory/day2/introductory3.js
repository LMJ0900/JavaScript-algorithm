//분수의 덧셈

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var num = ''
    var denom = ''
    num=numer1*denom2+numer2*denom1
    denom=denom1*denom2
    if(num>denom){
        var a = num
        var b = denom
    }else{
        var a = denom
        var b = num
    }
    let result = 1;
    const min = Math.min(a, b);

    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            result = i;
        }
    }

    answer[0] = num/result
    answer[1] = denom/result
    return(answer)
}