function solution(s) {
  const lowerCase = s.toLowerCase();
  const reversed = lowerCase.split('').reverse().join('');

  return lowerCase === reversed ? 'YES' : 'NO';
}

console.log(solution('goooG'));
console.log(solution('gooG'));
