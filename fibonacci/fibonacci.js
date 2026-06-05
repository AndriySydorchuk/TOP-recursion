export function fibs(n) {
  if (n === 0) {
    return [n];
  }

  const result = [0, 1];
  const resultLen = result.length;

  for (let i = resultLen - 1; i < n; i++) {
    const curr = result[i];
    const prev = result[i - 1];

    result.push(curr + prev);
  }

  return result;
}
