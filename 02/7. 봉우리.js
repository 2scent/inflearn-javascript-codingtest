function solution(arr) {
  let copied = [
    new Array(arr.length).fill(0),
    ...arr,
    new Array(arr.length).fill(0),
  ];
  copied = copied.map((arr) => [0, ...arr, 0]);

  let result = 0;
  for (let i = 1; i < copied.length - 1; i++) {
    for (let j = 1; j < copied.length - 1; j++) {
      const current = copied[i][j];
      const top = copied[i - 1][j];
      const right = copied[i][j + 1];
      const bottom = copied[i + 1][j];
      const left = copied[i][j - 1];

      if (
        current > top &&
        current > right &&
        current > bottom &&
        current > left
      ) {
        result++;
      }
    }
  }

  return result;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
