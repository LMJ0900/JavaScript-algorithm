//특정한 문자를 대소문자로 바꾸기

function solution(myString, alp) {
    var answer = '';
    for(i=0; i<myString.length; i++){
        if(myString[i]==alp){
            answer+=myString[i].toUpperCase()
        }else{
            answer+=myString[i]
        }
    }
    return answer;
}
console.log(solution("programmers","p"))