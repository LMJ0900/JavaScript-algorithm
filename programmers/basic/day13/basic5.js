//n개 간격의 원소들

function solution(num_list, n) {
    var answer = [];
    for(i=0; i<num_list.length; i+=n){
        answer.push(num_list[i])
    }
    return answer;
}
