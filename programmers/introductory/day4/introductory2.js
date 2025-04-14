//피자 나눠 먹기2

//오답1 시간초과
function solution(n) {
    a=6
    var result
    while(n!==a){
        if(n<a){
            n=n*2
        }else
        {a=a+6}
    }
    result = a/6
    
    return(result)
}

//정답
function solution(n) {
    var gcd
    if(n<6){
        a=6
        b=n
    }else{
        a=n
        b=6
    }
    for (let i = 1; i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    lem = (a * b) / gcd
    return(lem/6)
}