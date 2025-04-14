//덧셈식 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on('line', function (line) {
    input.push(line)
    const [a, b] = line.split(' ').map(Number);
    let c = a+b
    console.log(`${a} + ${b} = ${c}`)
    rl.close()
})