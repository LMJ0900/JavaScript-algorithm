//모스 부호(1)

function solution(letter) {
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    var answer = ''
    var arr=letter.split(' ')
    for(i=0; i<arr.length; i++){
        answer += morse[arr[i]]
    }
    return answer;
}
