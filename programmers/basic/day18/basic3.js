//간단한 식 계산하기 

function solution(binomial) {
    var answer = 0;
    if(binomial.includes("+")){
        a=binomial.indexOf("+")
        num1=binomial.slice(0,a-1)
        num2=binomial.slice(a+2,binomial.length)
        answer=Number(num1)+Number(num2)
    }else if(binomial.includes("-")){
        a=binomial.indexOf("-")
        num1=binomial.slice(0,a-1)
        num2=binomial.slice(a+2,binomial.length)
        answer=Number(num1)-Number(num2)
    }else if(binomial.includes("*")){
        a=binomial.indexOf("*")
        num1=binomial.slice(0,a-1)
        num2=binomial.slice(a+2,binomial.length)
        answer=Number(num1)*Number(num2)
    }
    return answer;
}
console.log(solution("43 * 12"))