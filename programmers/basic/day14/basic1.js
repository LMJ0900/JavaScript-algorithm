//홀수 vs 짝수

function solution(num_list) {
    var answer = 0;
    var answer1 = 0;
    for(i=0; i<num_list.length; i++){
        switch(i%2){
            case 0 : answer+=num_list[i]; break;
            case 1 : answer1+=num_list[i]; break;
        }
    }
    return Math.max(answer,answer1);
}
