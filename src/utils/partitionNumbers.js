// 計算 p(m, n): 將整數 m 分成 n 個正整數的劃分數
export function partitionNumber(m, n) {
  // 初始化動態規劃表
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // 邊界條件
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 0; // 當 n = 0 時，結果為 0
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0; // 當 m = 0 且 n > 0 時，結果為 0
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i < j) {
        dp[i][j] = 0; // 當 m < n 時，結果為 0
      } else if (i === j) {
        dp[i][j] = 1; // 當 m = n 時，結果為 1
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - j][j]; // 遞推公式
      }
    }
  }

  return dp[m][n];
}

// 計算 p(m, 1) + p(m, 2) + ... + p(m, n): 將整數 m 分成最多 n 個正整數的劃分數
export function sumOfPartitionsCal(m, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += partitionNumber(m, i);
  }
  return sum;
}
