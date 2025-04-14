//배열의 평균값


function solution(numbers) {
    var temp = 0
    for(i=0; i<numbers.length; i++){
        temp+=numbers[i]
    }
    return((temp/numbers.length).toFixed(1))
}