//문자열이 몇 번 등장하는지 세기

function solution(myString, pat) {
    var count = 0;
    var pos = 0;
    while(pos <= myString.length-pat.length){
        const foundIndex = myString.indexOf(pat, pos);
        if (foundIndex === -1) break;
        count++;
        pos = foundIndex + 1;
    }
    return count;
}