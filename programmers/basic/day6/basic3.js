//수 조작하기 2

function solution(numLog) {
    var answer = []
    
    for(i=0; i<numLog.length; i++){
        let diff = numLog[i + 1] - numLog[i];
        switch(diff){
            case 1 : {
                answer.push('w')
                break;
            }
            case -1 : {
                answer.push('s')
                break;
            }
            case 10 : {
                answer.push('d')
                break;
            }
            case -10 : {
                answer.push('a')
                break;
            }
        }
    }
    return(answer.join(''))
}
