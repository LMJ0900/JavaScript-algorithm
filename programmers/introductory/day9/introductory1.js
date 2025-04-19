//개미 군단

function solution(hp) {
    var answer = 0;
    var temp = 0
    answer= Math.floor(hp/5)
    temp = hp%5
    answer+=Math.floor(temp/3)
    temp = temp%3
    answer+=temp
    return answer;
}
