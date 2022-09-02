function solution(str) {
  const numStr = str //
    .split('')
    .filter((c) => !isNaN(c))
    .join('');

  return Number(numStr);
}

console.log(solution('g0en2T0s8eSoft')); // 208
console.log(solution('tge0a1h205er')); // 1205
