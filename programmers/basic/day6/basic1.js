//마지막 두 원소

function solution(num_list) {
    answer = num_list
    result = 0
    if(num_list[num_list.length-2]<num_list[num_list.length-1]){
        result=num_list[num_list.length-1]-num_list[num_list.length-2]
        answer.push(result)
    }else{
        result = num_list[num_list.length-1] * 2
        answer.push(result)
    }
    return(answer)
}