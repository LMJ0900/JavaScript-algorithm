//직사각형 넓이 구하기
function solution(dots) {
    var answer1 = dots.map(a => a[0])
    var answer2 = dots.map(a => a[1])
    answer1 = [...new Set(answer1)]
    answer2 = [...new Set(answer2)]
    answer1.sort((a,b)=> a-b)
    answer2.sort((a,b)=> a-b)
    console.log(answer1)
    console.log(answer2)
    result = (Number(answer1[1])-Number(answer1[0]))* (Number(answer2[1])-Number(answer2[0]))
    return result;
}
console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]))