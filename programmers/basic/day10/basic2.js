//접두사 인지 확인하기

function solution(my_string,is_prefix) {
    var answer = []
    var result = 0
    for(i=1; i<my_string.length+1; i++){
        answer.push(my_string.slice(0,i))
    }
    for(i=0; i<answer.length; i++){
        if(answer[i]==is_prefix){
            result = 1
        }
    }
    
    
    return result
}
