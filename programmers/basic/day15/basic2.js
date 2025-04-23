//조건에 맞게 수열 변환하기2

function solution(arr) {
    let count = 0;
    let changed = true;

    while (changed) {
        changed = false;
        let newArr = arr.slice();

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                newArr[i] = arr[i] / 2;
            } else if (arr[i] < 50 && arr[i] % 2 === 1) {
                newArr[i] = arr[i] * 2 + 1;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (newArr[i] !== arr[i]) {
                changed = true;
                break;
            }
        }

        if (changed) {
            count++;
            arr = newArr;
        }
    }

    return count;
}
