// 返回歐拉數列 A(m, 0), A(m, 1), ..., A(m, m-1)
export function eulerianNumbersList(m) {
  m = parseInt(m);
  const A = Array.from({ length: m + 1 }, () => Array(m).fill(0));

  // 邊界條件
  A[0][0] = 1;

  // 遞推計算歐拉數
  for (let i = 1; i <= m; i++) {
    for (let k = 0; k < i; k++) {
      const term1 = (k + 1) * A[i - 1][k];
      const term2 = (i - k) * (k > 0 ? A[i - 1][k - 1] : 0);
      A[i][k] = term1 + term2;
    }
  }

  // 返回 A(m, 0), A(m, 1), ..., A(m, m-1)
  console.log(A[m].slice(0, m));
  return A[m].slice(0, m);
}

// 返回單個歐拉數 A(m, k)
export function eulerianNumber(m, k) {
  m = parseInt(m);
  k = parseInt(k);

  if (k < 0 || k >= m) {
    throw new Error("k must satisfy 0 <= k <= m-1");
  }

  const numbersList = eulerianNumbersList(m);
  return numbersList[k];
}
