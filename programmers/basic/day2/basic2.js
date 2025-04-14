//문자열 붙여서 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
    const [a, b] = line.split(' ');
    let res1 = a+b
    console.log(res1
    )
    rl.close()
})