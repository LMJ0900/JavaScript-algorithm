//코드 처리하기

function solution(code) {
    var answer = [];
    var mode = '0'
    for(i=0; i<code.length; i++){
        if(code[i]=='1'){
            if(mode=='0'){
                mode ='1'
            }else{
                mode='0'
            }
        }else{
            if(mode=='1'){
                if(i%2==1){
                    answer.push(code[i])
                }
            }else{
                if(i%2==0){
                    answer.push(code[i])
                }
            }
        }
}
result=answer.join('')
return(result == '' ? "EMPTY" : result)
}