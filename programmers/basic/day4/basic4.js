//조건 문자열

function solution(ineq, eq, n, m) {
    var answer=false
    var result = 0
    if(`${ineq}${eq}`=='>='){
        answer = n>=m
       if(answer==false){
            result = 0
       }else{
        result=1
       }
    } else if(`${ineq}${eq}`=='<='){
        answer = n<=m
       if(answer==false){
            result = 0
       }else{
        result=1
       }
    } else if(`${ineq}${eq}`=='<!'){
        answer = n<m
       if(answer==false){
            result = 0
       }else{
        result=1
       }
     } else{
        answer = n>m
        if(answer==false){
            result = 0
       }else{
        result=1
       }
       }
    return(result)
}