//주사위의 개수

function solution(box, n) {
    var a=Math.floor(box[0]/n)
    var b=Math.floor(box[1]/n)
    var c=Math.floor(box[2]/n)
    return a*b*c;
}
