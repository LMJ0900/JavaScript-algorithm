//캐릭터의 좌표 

function solution(keyinput, board) {
    var answer = [0, 0];
    const limitX = Math.floor(board[0] / 2);
    const limitY = Math.floor(board[1] / 2);

    for (let i = 0; i < keyinput.length; i++) {
        switch (keyinput[i]) {
            case "up":
                if (answer[1] < limitY) answer[1] += 1;
                break;
            case "down":
                if (answer[1] > -limitY) answer[1] -= 1;
                break;
            case "left":
                if (answer[0] > -limitX) answer[0] -= 1;
                break;
            case "right":
                if (answer[0] < limitX) answer[0] += 1;
                break;
        }
    }
    return answer;
}
console.log(solution(["left", "right", "up", "right", "right"],[11, 11]))