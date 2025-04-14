//배열 뒤집기


function solution(num_list) {
    var answer = [];
    for(i=0; i<num_list.length; i++){
        answer[i]=num_list[num_list.length-i-1]
    }
    return answer;
}