// function solution(s, t) {
//   const tIndexes = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === t) {
//       tIndexes.push(i);
//     }
//   }

//   const result = [];

//   for (let i = 0; i < s.length; i++) {
//     result.push(
//       tIndexes //
//         .map((tIndex) => Math.abs(tIndex - i))
//         .reduce((a, b) => Math.min(a, b))
//     );
//   }
// }

function solution(s, t) {
  const result = [];

  // 왼쪽부터 거리 구하기
  let p = 100;
  for (let c of s) {
    if (c === t) {
      p = 0;
    } else {
      p += 1;
    }
    result.push(p);
  }

  // 오른쪽부터 거리 구하기
  p = 100;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p += 1;
    }

    result[i] = Math.min(result[i], p);
  }

  return result;
}

console.log(solution('teachermode', 'e'));
