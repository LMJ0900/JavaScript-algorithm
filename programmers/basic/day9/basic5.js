//접미사 배열

function solution(my_string, is_suffix) {
    answer = 0
    for(i=0; i<my_string.length; i++){
        if(is_suffix==my_string.slice(-i)){
            answer = 1
        }     
    }
    return answer
}
