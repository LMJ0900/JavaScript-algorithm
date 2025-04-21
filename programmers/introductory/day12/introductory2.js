//문자열 정렬하기 

function solution(my_string) {
    const a = ['1','2','3','4','5','6','7','8','9','0']
    var answer = [];
    for(i=0; i<my_string.length; i++){
        if(a.includes(my_string[i])){
           answer.push(Number(my_string[i])) 
        }
    }
    return answer.sort((a,b)=>a-b);
}


