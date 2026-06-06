export function fibs(n) {
  if (!Number.isInteger(n) || n < 0) return undefined;

  if (n === 0) return [];
  if (n === 1) return [n - 1];

  const result = [0, 1];
  const resultLen = result.length;

  for (let i = resultLen - 1; i < n - 1; i++)
    result.push(result[i] + result[i - 1]);

  return result;
}

export function fibsRec(n) {
  if (!Number.isInteger(n) || n < 0) {
    return undefined;
  }

  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);

  const prevLastValue = prev[prev.length - 1];
  const prevSecondLastValue = prev[prev.length - 2];

  const curr = [...prev];
  curr.push(prevLastValue + prevSecondLastValue);

  return curr;
}
