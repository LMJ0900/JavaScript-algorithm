//홀짝 구분하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('').join('')
    n=Number(input)
    if(n%2==1){
        res = "odd"
    }else{
        res = "even"
    }
    console.log(`${input} is ${res}`)
    rl.close()
})