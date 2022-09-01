function sum(arr) {
  const result = arr.reduce((a, b) => a + b);

  return result;
}

function solution(arr) {
  let result = Number.MIN_SAFE_INTEGER;

  // 행과 열 최대 합 구하기
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let columnSum = 0;

    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }

    result = Math.max(result, rowSum, columnSum);
  }

  // 대각선 최대 합 구하기
  let crossSum1 = 0;
  let crossSum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    crossSum1 += arr[i][i];
    crossSum2 += arr[i][arr.length - i - 1];
  }

  result = Math.max(result, crossSum1, crossSum2);

  return result;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
