// utils/combinatorics.js
export function P(n, r) {
  if (r > n) return 0;
  return factorial(n) / factorial(n - r);
}

export function C(n, r) {
  if (r > n) return 0;
  if (r === 0) return 1;
  if (r < 0) return 0;
  return factorial(n) / (factorial(r) * factorial(n - r));
}

export function nPowerR(n, r) {
  n = parseInt(n);
  r = parseInt(r);
  return Math.pow(n, r);
}

export function CStarsAndBars(n, r) {
  n = parseInt(n);
  r = parseInt(r);
  return C(n + r - 1, r);
}

// Helper function for factorial
function factorial(num) {
  if (num <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
