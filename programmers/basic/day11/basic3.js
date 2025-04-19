//글자 지우기

function solution(my_string, indices) {
    var answer = my_string.split('');
    
    indices.sort((a, b) => b - a); 

    for (let i = 0; i < indices.length; i++) {
        answer.splice(indices[i], 1); 
    }
    
    return answer.join('');
}
console.log(solution("apporoograpemmemprs",[1, 16, 6, 15, 0, 10, 11, 3]))