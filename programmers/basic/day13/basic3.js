//왼쪽 오른쪽 

function solution(str_list) {
    var answer=[]
    var count = 0
    for(i=0; i<str_list.length; i++){
        if(str_list[i]=="l"){
            temp=i
            answer=str_list.slice(0,temp)
            break;
       }else if(str_list[i]=="r"){
            count = i
            answer=str_list.slice(count+1,str_list.length)
            break;
       }
    }
    return answer;
}