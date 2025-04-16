//순서쌍의 개수

// 오답1 시간초과
function solution(n) {
    result=0
    for(i=0; i<=n; i++){
        for(j=0; j<=n; j++){
            if(i*j==n){
                result++
            }
        }
    }
    return result;
}

//정답
function solution(n) {
    let count = 0;
    for (i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
