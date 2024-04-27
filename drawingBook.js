export function pageCount(n, p) {
  const fromFirst = Math.floor(p / 2);
  const fromLast = Math.floor(n / 2 - fromFirst);
  const minP = Math.min(fromFirst, fromLast);
  return minP;
}
