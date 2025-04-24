//가장 큰 수 찾기

function solution(array) {
    var answer = [];
    var temp = 0
    for(i=0; i<array.length; i++){
        if(array[i]>temp){
            temp=array[i]
            answer[0]=temp
            answer[1] = i
        }
    }
    return answer;
}