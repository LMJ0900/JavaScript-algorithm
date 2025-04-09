//대소문자 바꿔서 출력하기기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('line', function (line) {
    const str = line.split('').map(char => char===char.toUpperCase()
        ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    console.log(str)
    rl.close()
})