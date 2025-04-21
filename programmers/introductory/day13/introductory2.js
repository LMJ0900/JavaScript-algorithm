//배열 원소의 길이 

function solution(strlist) {
    var answer = [];
    for(i=0; i<strlist.length; i++){
       answer.push(strlist[i].length) 
    }
    return answer;
}
