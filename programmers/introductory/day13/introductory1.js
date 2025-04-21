//컨트롤 제트 

function solution(s) {
    var a = s.split(' ')
    var answer = 0;
    for(i=0; i<a.length; i++){
        
        if(a[i]=='Z'){
            answer-=a[i-1]
        }else{
            answer+=Number(a[i])
        }
    }
    return answer;
}
