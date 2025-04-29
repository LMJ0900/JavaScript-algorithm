//배열의 길이를 2의 거듭제곱으로 만들기

function solution(arr) {
    var answer = arr;
    while((answer.length & (answer.length - 1)) !== 0){
        answer.push(0)
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6]))