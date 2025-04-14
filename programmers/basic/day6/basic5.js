//수열과 구간 쿼리2


function solution(arr, queries) {
    var result = []
    for(i=0; i<queries.length; i++){
        let temp = arr.slice(queries[i][0], queries[i][1]+1)
        temp.sort((a,b) => a - b)
        let a = queries[i][2]
        for(j=0; j<temp.length; j++){
            if(temp[j]> a){
                result.push(temp[j])
                break;
            }
    }
    if(result[i]==undefined){
        result.push(-1)
    }
   
}
     return(result);
}