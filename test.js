function format(bytes) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }
console.time('실행시간'); // 타이머 시작
const before = process.memoryUsage();

function a() {
    b();
  }
  
  async function b() {
    await d();
    console.log('Hello');
    await c();
    console.log('안녕');
  }
  
  async function c() {
    console.log('hi');
  }
  async function d() {
    console.log('안녕하세요');
  }
  a();
  

console.timeEnd('실행시간'); // 타이머 종료 및 시간 출력
const after = process.memoryUsage();

console.log('메모리 증가:', format(after.heapUsed - before.heapUsed));