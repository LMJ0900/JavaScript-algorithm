//주사위 게임3

function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const count = {};

    for (let n of arr) {
        count[n] = (count[n] || 0) + 1;
    }

    const keys = Object.keys(count).map(Number);
    const values = Object.values(count);

    if (keys.length === 1) {
        return 1111 * keys[0];
    }

    if (keys.length === 2) {
        if (values.includes(3)) {
            const p = keys.find(k => count[k] === 3);
            const q = keys.find(k => count[k] === 1);
            return (10 * p + q) ** 2;
        } else {
            const [p, q] = keys;
            return (p + q) * Math.abs(p - q);
        }
    }

    if (keys.length === 3) {
        const p = keys.find(k => count[k] === 2);
        const others = keys.filter(k => count[k] === 1);
        return others[0] * others[1];
    }

    return Math.min(...arr);
}
