//최댓값 만들기 2

function solution(numbers) {
  const answer1 = [...numbers].sort((a, b) => a - b);
  const answer2 = [...numbers].sort((a, b) => b - a);

  const result1 = answer1[0] * answer1[1]; 
  const result2 = answer2[0] * answer2[1]; 

  return result1 > result2 ? result1 : result2;
}

console.log(solution([1, 2, -3, 4, -5]))