//콜라츠 수열 만들기

function solution(n) {
    var answer = [n];
    while(n!==1){
        if(n%2==0){
            n /= 2
            answer.push(n)
        }else{
            n=n*3+1
            answer.push(n)
        }
    }
    return(answer) 
}