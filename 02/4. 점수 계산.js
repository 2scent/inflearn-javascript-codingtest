function solution(arr) {
  let result = 0;

  let add = 0;
  for (const answer of arr) {
    if (!answer) {
      add = 0;
      continue;
    }

    add++;
    result += add;
  }

  return result;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 10
