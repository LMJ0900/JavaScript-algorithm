//아이스 아메리카노

function solution(money) {
    result = [0,0]
    while(money >= 5500){
        result[0] += 1;
        money -= 5500;
    }
    result[1] = money;
    return result;
}