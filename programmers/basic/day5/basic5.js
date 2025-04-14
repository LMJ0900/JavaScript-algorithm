//이어 붙인 수

function solution(num_list) {
    var answer = 0;
    var a =''
    var b =''
    for(i=0; i<num_list.length; i++){
        if(num_list[i]%2==0){
            a += String(num_list[i])
        }else{
            b += String(num_list[i])
        }
    }
    answer = Number(a)+Number(b)
    return(answer)
}
