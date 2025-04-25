//공백으로 구분하기 2

function solution(my_string) {
    var answer = [];
    answer=my_string.split(" ")
    answer=answer.filter(item=>item !== "")
    return answer;
}

console.log(solution("    programmers  "))