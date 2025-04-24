//A 강조하기

function solution(myString) {
    var answer = '';
    for(i=0; i<myString.length; i++){
        if(myString[i]=="a" || myString[i]=="A"){
            answer+='A'
        }else{
            answer+=myString[i].toLowerCase()
        }
    }
    return answer;
}
console.log(solution("PrOgRaMmErS"))