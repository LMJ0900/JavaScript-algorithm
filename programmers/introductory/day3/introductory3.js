//최빈값 구하기

//오답1 반례가 뭐가 있을까?
function solution(array) {
    answer = {}
    var maxvalue = 0
    var maxkey = 0
    for(i=0; i<array.length; i++){
        const key = array[i]
        answer[key] = (answer[key]||0)+1
    }
    for(const key in answer){
        if(answer[key]>maxvalue){
            maxvalue = answer[key]
            console.log(maxvalue)
            maxkey = key
        }else if(answer[key]==maxvalue){
            maxkey = -1
        }
    }
    return(maxkey)
}

//정답
function solution(array) {
    answer = {}
    var maxvalue = 0
    var maxkey = 0
    var count = 0
    for(i=0; i<array.length; i++){
        const key = array[i]
        answer[key] = (answer[key]||0)+1
    }
    for(const key in answer){
        if(answer[key]>maxvalue){
            maxvalue = answer[key]
            maxkey = key
            count = 1
        }else if(answer[key]===maxvalue){
            maxkey = -1
            count++
        }
    }
    return count === 1 ? Number(maxkey) : -1;
}