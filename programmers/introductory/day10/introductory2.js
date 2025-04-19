//2차원으로 만들기

function solution(num_list, n) {
    var answer = [];
    for(i=0; i*n<num_list.length; i++){
        answer.push(num_list.slice(i*n,i*n+n))
    }
    return answer;
}