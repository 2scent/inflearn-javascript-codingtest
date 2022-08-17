function solution(arr) {
  return arr.filter((n, i) => {
    if (i === 0) return true;
    if (n > arr[i - 1]) return true;
    return false;
  });
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr)); // [7, 9, 6, 12]
