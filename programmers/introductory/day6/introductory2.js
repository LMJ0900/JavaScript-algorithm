// 직각 삼각형 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
    var a = input.join('')
    for(i=1; i<=a; i++){
        console.log('*'.repeat(i))
    }
    rl.close()
})