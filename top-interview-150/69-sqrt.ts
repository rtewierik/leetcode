function mySqrt(x: number): number {
  var start = 0;
  var end = x;
  var mid = null;
  var answer = 0;

  while (start <= end) {
      mid = start + Math.floor((end - start) / 2);
      if (mid * mid > x) {
          end = mid - 1;
      } else {
          answer = mid;
          start = mid + 1;
      }
  }
  return answer;
};