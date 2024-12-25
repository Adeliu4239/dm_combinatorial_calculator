// utils/stirling_numbers.js
export function stirlingNumbersCal(m, n) {
  m = parseInt(m);
  n = parseInt(n);

  // 如果 m < n，返回空數組
  if (m < n) return [];

  // 初始化斯特林數表 S[m+1][n+1]
  const S = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 邊界條件
  for (let i = 0; i <= m; i++) {
    S[i][0] = 0; // S(m, 0) = 0 for all m > 0
    if (i <= n) S[i][i] = 1; // S(m, m) = 1
  }

  // 遞推公式計算 S(m, n)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        S[i][j] = S[i - 1][j - 1] + j * S[i - 1][j];
      }
    }
  }

  // 返回 S_sub(m,1), S_sub(m,2), ..., S_sub(m,n)
  return S[m].slice(1, n + 1);
}


export function sumOfStirlingNumbers(m, n) {
  const stirlingNumbers = stirlingNumbersCal(m, n);
  if (stirlingNumbers.length === 0) return 0; // 檢查空數組情況
  return stirlingNumbers.reduce((acc, val) => acc + val, 0);
}

export function ontoNumberCal(m, n) {
  if (m < n) return 0; // 若 r < n，映射數量為 0
  // 測試 stirlingNumbersCal
  console.log(stirlingNumbersCal(5, 3)); // 應該返回 [10, 25, 35]
  console.log(stirlingNumbersCal(3, 5)); // 應該返回 []

  // 測試 sumOfStirlingNumbers
  console.log(sumOfStirlingNumbers(5, 3)); // 應該返回 70
  console.log(sumOfStirlingNumbers(3, 5)); // 應該返回 0

  return factorial(n) * stirlingNumbersCal(m, n)[n - 1];
}

function factorial(num) {
  if (num <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
