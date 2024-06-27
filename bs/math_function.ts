function f(n: number) {
  let iters = 0;
  let expectedIters = Math.ceil(n / 2);
  let c = 0;
  while (n >= 0) {
    iters += 1;
    n -= 2;
    c += n - 2;
  };
  return c;
}

for (var i = 1000000; i <= 10000000; i += 1) {
  if (f(i) < f(i + 1)) {
    console.log("FALSE", i);
  }
}