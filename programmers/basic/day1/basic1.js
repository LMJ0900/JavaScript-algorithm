//문자열 출력하기기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
    const [a, b] = line.split(' ');
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
}).on('close', function () {
    
});