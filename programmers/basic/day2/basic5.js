//문자열 겹쳐쓰기(입력 받는줄 알고 이렇게 풀었음;;)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
    const[a,b,s] = line.split(' ')
    str = a.split('')
    str2 = b.split('')
    j=0
    n=Number(s)
    for(i=n; i<n+str2.length; i++){
        str[i] = str2[j]
        j++
    }
    console.log(str.join(''))
    rl.close()
})

//문자열 겹쳐쓰기 

function solution(my_string, overwrite_string, s) {
    const front = my_string.slice(0, s);
    const back = my_string.slice(s + overwrite_string.length);
    return front + overwrite_string + back;
}
