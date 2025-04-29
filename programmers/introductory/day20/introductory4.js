//다항식 더하기

function solution(polynomial) {
    var answer = '';
    var temp = 0
    var temp2 = 0
    answer=polynomial.split(' + ')
    for(i=0; i<answer.length; i++){
        if(answer[i].includes("x")){
            if(answer[i].length==1){
                temp+=1
            }else{
               temp+=Number(answer[i].replace('x',''))
            }
        }else{
            temp2+=Number(answer[i])
        }
    }
    if(temp==0){
        result = `${temp2}`
    }else if(temp!=1){
        result = `${temp}x + ${temp2}`
    } else{
         result = `x + ${temp2}`
    }
    if((temp2!=0)){
        return result
    } else if(temp==1){
        return `x`
    }else{
        return `${temp}x`
    }
}
console.log(solution("1 + 2 + 3"))