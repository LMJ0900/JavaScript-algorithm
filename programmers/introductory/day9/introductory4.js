//구슬을 나누는 경우의 수

function solution(balls, share) {
    let answer = 1;
    let result = 1;
    let result2 = 1;

    for (let i = 1; i <= balls; i++) {
        answer *= i;
    }
    for (let i = 1; i <= share; i++) {
        result *= i;
    }
    for (let i = 1; i <= balls - share; i++) {
        result2 *= i;
    }

    return Math.round(answer / (result * result2));
}
