//삼각형 완성 조건 

function solution(sides) {
    var answer = 0;
    var a = sides.sort((a,b) => b-a)
    if(a[0]<a[1]+a[2]){
        answer=1
    }else{
        answer=2
    }
    return answer;
}