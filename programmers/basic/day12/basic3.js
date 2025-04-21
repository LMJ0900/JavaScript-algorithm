//배열 만들기3

function solution(arr, intervals) {
    var answer = [];
    var result=arr.slice(intervals[0][0],intervals[0][1]+1)
    var result2=arr.slice(intervals[1][0],intervals[1][1]+1)
    answer=result.concat(result2)
    return answer;
}