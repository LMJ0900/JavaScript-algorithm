//팩토리얼

function solution(n) {
    var result = 1
    var count = 0
    for(i=1; result<=n; i++){
        result *= i
        count=i
    }
    if(result>n){
        count-=1
    }
    return count
}
