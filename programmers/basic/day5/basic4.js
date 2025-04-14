//원소들의 곱과 합

function solution(num_list) {
    num_list=[3, 4, 5, 2, 1]
    var result2 = 0;
    var result1 = 'n'
    var result3 = 0
    for(i=0; i<num_list.length; i++){
        if(result1 == 'n'){
            result1 = num_list[i]
            result2+=num_list[i]
        }else{
            result1*=num_list[i]
            result2+=num_list[i]
        }        
    }
    result3 = (result1<result2**2) ? 1 : 0
}
solution()