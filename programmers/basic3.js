//문자열 반복해서 출력하기기


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const [str,num] = line.split(' ');
    console.log(str.repeat(Number(num)))
    rl.close()
})