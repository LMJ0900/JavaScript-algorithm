//수열과 구간 쿼리1

function solution(arr, queries) {
    for (i = 0; i < queries.length; i++) {
        const [s, e] = queries[i];
        for (let j = s; j <= e; j++) {
            arr[j] += 1;
        }
    }
    return arr;
}

