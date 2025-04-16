//옷가게 할인 받기

function solution(my_string) {
    var answer = []
    for(i=0; i<my_string.length; i++){
        answer.push(my_string[my_string.length-i-1])
    }
    return(answer.join(''))
}
