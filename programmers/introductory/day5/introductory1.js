//옷가게 할인 받기

function solution(price) {
    var result = 0
    if(price>=500000){
        result = price*80/100
    }else if(price>=300000){
        result = price*90/100
    }else if(price>=100000){
        result = price*95/100
    }else{
        result = price
    }
    result = Math.floor(result);
    return(result)
}