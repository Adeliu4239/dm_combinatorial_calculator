// utils/number_theory.js
export function catalanNumbers(n) {
  if (n <= 0) return [];
  const catalan = [1];
  for (let i = 1; i < n; i++) {
    catalan[i] = (2 * (2 * i - 1) * catalan[i - 1]) / (i + 1);
  }
  return catalan;
}

export function triangularNumbers(n) {
  if (n <= 0) return [];
  const triangular = [];
  for (let i = 1; i <= n; i++) {
    triangular.push((i * (i + 1)) / 2);
  }
  return triangular;
}

export function harmonicNumbers(n) {
  if (n <= 0) return [];
  const harmonic = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / i;
    harmonic.push(sum.toFixed(3));
  }
  return harmonic;
}

export function fibonacciNumbers(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}

export function lucasNumbers(n) {
  if (n <= 0) return [];
  if (n === 1) return [2];
  const lucas = [2, 1];
  for (let i = 2; i < n; i++) {
    lucas.push(lucas[i - 1] + lucas[i - 2]);
  }
  return lucas;
}
