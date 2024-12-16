function foo(a, b) {
  if (!a || !b) {
    return 0; // Handle falsy inputs; You might want to throw error instead
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(0, 2)); // Output: 0
console.log(foo(1, 0)); // Output: 0
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo('',2)); //Output: 0
console.log(foo(2,'')); //Output: 0