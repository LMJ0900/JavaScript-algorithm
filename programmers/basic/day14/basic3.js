//할 일 목록 

function solution(todo_list, finished) {
    var answer = [];
    for(i=0; i<todo_list.length; i++){
        switch(finished[i]){
            case false : answer.push(todo_list[i]); break;
        }
    }
    return answer;
}