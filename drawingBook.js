export function pageCount(n, p) {
  if (n < 1 || p < 1 || p > n) {
    return 0;
  } else {
    const fromFirst = Math.floor(p / 2);
    const fromLast = Math.floor(n / 2 - fromFirst);
    const minP = Math.min(fromFirst, fromLast);
    return minP;
  }
}
