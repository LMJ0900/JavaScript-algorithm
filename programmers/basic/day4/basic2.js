//공배수

function solution(number, n, m) {
    var result = 0
    if((number%n==0)&&(number%m==0)){
        result=1
    } else{
        result=0
    }
    return result;
}