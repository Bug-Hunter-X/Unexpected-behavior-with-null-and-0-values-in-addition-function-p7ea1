function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; 
  }
  if (a === 0 || b === 0){
    return a + b
  }
  return a + b;
}

console.log(foo(null, 1)); // 0
console.log(foo(1, null)); // 0
console.log(foo(1, 0)); // 1
console.log(foo(0, 1)); // 1
console.log(foo(null, 0)); // 0
console.log(foo(0, null)); // 0