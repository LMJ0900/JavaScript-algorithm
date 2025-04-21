//모음 제거 

function solution(my_string) {
    const a = ['a','e','i','o','u']
    var answer = [];
    for(i=0; i<my_string.length; i++){
        if(!a.includes(my_string[i])){
           answer.push(my_string[i]) 
        }
    }
    return answer.join('');
}

