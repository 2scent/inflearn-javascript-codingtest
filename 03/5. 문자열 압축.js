function solution(s) {
  let result = '';

  let c = '';
  let count = 0;

  for (const x of s) {
    if (c === x) {
      count++;
      continue;
    }

    result += c;
    if (count > 1) {
      result += count;
    }

    c = x;
    count = 1;
  }

  result += c;
  if (count > 1) {
    result += count;
  }

  return result;
}

console.log(solution('KKHSSSSSSSE')); // K2HS7E
