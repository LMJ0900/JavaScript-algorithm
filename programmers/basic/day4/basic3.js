//홀짝에 따라 다른값 반환하기

function solution(n) {
    var result = 0
    var result2 = 0
    console.log(n)
        for(i=1; i<=n; i++){
            if(i%2==0){
                result+=(i**2)
            }else{
                
                result2+=i
            }
        }
        if(n%2==0){
            return(result)
        }else{
            return(result2)
        }
   
}