//flag에 따라 다른 값 반환하기

function solution(a, b, flag) {
    var result=0
    if(flag==true){
        result=a + b
    }else{
        result = a-b
    }
    return(result)
}