//배열 비교하기

function solution(arr1, arr2) {
    var answer = 0;
    var temp1 = 0
    var temp2 = 0
    if(arr1.length>arr2.length){
        answer=1
    }else if(arr1.length==arr2.length){
        for(i=0; i<arr1.length; i++){
            temp1+=arr1[i]
            temp2+=arr2[i]
        }
        if(temp1>temp2){
            answer = 1
        }else if(temp1==temp2){
            answer=0
        }else{
            answer=-1
        }
    }else{
        answer=-1
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5],	[3, 3, 3, 3, 3]))