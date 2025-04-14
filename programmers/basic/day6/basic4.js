//수열과 구간 쿼리 3

function solution(arr, queries) {
    var result1 = []
    var result2 = []
    for(i=0; i<queries.length; i++){
         result1.push(queries[i][0])
         result2.push(queries[i][1])
         var temp = arr[result1[i]]
         arr[result1[i]]= arr[result2[i]]
         arr[result2[i]]= temp
    }
    return(arr);
}