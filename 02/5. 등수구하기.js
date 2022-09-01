function solution(arr) {
  const sorted = arr.slice().sort((a, b) => b - a);

  return arr.map((n) => sorted.indexOf(n) + 1);
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // 4 3 2 1 5
