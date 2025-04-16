// 문자열 여러번 뒤집기

function solution(my_string, queries) {
    var answer = my_string.split('');
    for(i=0; i<queries.length; i++){
        let [start, end] = queries[i];
        let reversed = answer.slice(start, end + 1).reverse();
        answer.splice(start, end - start + 1, ...reversed);        
    }
    return(answer.join(''))
}