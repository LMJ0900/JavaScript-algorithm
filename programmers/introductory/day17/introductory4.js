//OX퀴즈

function solution(quiz) {
    var answer = []
    for(i=0; i<quiz.length; i++){
        let a = quiz[i].split(' ')
        if(a.includes("-")){
            if(Number(a[4])==Number(a[0])-Number(a[2])){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }else if(a.includes("+")){
            if(Number(a[4])==Number(a[0])+Number(a[2])){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }
    }
    return answer;
}
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]))