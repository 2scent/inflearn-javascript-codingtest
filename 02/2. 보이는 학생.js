function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;

  for (const n of arr) {
    if (n > max) {
      max = n;
      result++;
    }
  }

  return result;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr)); // 5
