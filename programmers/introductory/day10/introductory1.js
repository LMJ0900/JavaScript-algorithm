//점의 위치 구하기

function solution(dot) {
    var result = 0
    if(dot[0]>0){
        if(dot[1]>0){
            result=1
        }else{
            result =4
        }
    }else{
        if(dot[1]<0){
            result = 3
        }else{
            result=2
        }
    }
    return result
}
