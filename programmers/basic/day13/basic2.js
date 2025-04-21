//순서 바꾸기
function solution(num_list, n) {
    var answer = num_list.slice(0,n)
    var answer2 = num_list.slice(n,num_list.length)
    result = answer2.concat(answer);
    return result
}
