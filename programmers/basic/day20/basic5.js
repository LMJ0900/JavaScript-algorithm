//뒤에서 5등까지

function solution(num_list) {
    var answer = [];
    answer=num_list.sort((a,b) => a-b)
    answer=answer.slice(0,5)
    return answer;
}
console.log(solution([12, 4, 15, 46, 38, 1, 14]))