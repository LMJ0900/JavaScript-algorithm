//합성수 찾기

function solution(n) {
    const primes = [
        1, 2, 3, 5, 7, 11, 13, 17,19,23, 29, 31,
        37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97,
      ];
    var answer = 0;
    for(i=4; i<=n; i++){
        if(!primes.includes(i)){
            answer++
        }
    }
    
    return answer;
}
