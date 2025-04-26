//rny_string

//정답 1
function solution(rny_string) {
    var answer = '';
    for(i=0; i<rny_string.length; i++){ 
        if(rny_string[i]=='m'){
            answer+='r'
            answer+='n'
        }else{
            answer+=rny_string[i]
        }
    }
    return answer;
}

//정답2
function solution(rny_string) {
    var answer = '';
    answer = rny_string.replaceAll('m',"rn")
    return answer;
}