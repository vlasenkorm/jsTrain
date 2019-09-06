'use strict';
//Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  

function fib2(n) {
  let a = 1, b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}