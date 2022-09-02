function solution(s) {
  const filtered = s
    .toLowerCase()
    .split('')
    .filter((c) => c >= 'a' && c <= 'z')
    .join('');

  const reversed = filtered //
    .split('')
    .reverse()
    .join('');

  return filtered === reversed ? 'YES' : 'NO';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
