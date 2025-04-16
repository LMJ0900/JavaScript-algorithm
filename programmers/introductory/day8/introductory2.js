// 외계 행성의 나이

function solution(age) {
    let result = '';
    let strAge = age.toString();

    for (let i = 0; i < strAge.length; i++) {
        let digit = Number(strAge[i]);           
        let char = String.fromCharCode(97 + digit); 
        result += char;
    }

    return result;
}
