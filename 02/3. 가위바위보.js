function solution(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const aValue = a[i];
    const bValue = b[i];

    // 비길 때
    if (aValue === bValue) {
      result.push('D');
      continue;
    }

    // A가 이길 때
    if (
      (aValue === 1 && bValue === 3) ||
      (aValue === 2 && bValue === 1) ||
      (aValue === 3 && bValue === 2)
    ) {
      result.push('A');
      continue;
    }

    // B가 이길 때
    result.push('B');
  }

  return result;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // [ 'A', 'B', 'A', 'B', 'D' ]
