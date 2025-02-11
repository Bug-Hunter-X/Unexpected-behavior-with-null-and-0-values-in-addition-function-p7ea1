function foo(a, b) {
  if (a == null || b == null) {
    return 0; // This will not always work as expected
  }
  return a + b;
}

console.log(foo(null, 1)); // 0
console.log(foo(1, null)); // 0
console.log(foo(1, 0)); // 1
console.log(foo(0, 1)); // 1
console.log(foo(null, 0)); // 0
console.log(foo(0, null)); // 0