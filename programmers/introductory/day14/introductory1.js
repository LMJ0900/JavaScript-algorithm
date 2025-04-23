//가까운 수

function solution(array, n) {
    var a = Infinity
    var result = 0
    for(i=0; i<array.length; i++){
        temp=Math.abs(array[i]-n)
        if(temp<a){
            result=array[i]
            a=temp
        }else if(temp==a){
            result = Math.min(result, array[i]);
        }
    }
    return result;
}
console.log(solution([10, 11, 12],13))