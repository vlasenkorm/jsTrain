'use strict';
//Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

// factorial(0)                        // 1
// factorial(1)                        // 1
// factorial(6)                        // 720

function factorial(num){
    for (let i = num - 1; i > 1; i--){
        num = num * i;
    }return num;
}

function factorialRec(n) {
    return n ? n * factorialRec(n - 1) : 1;
  }
  
  
  console.time('test');
  for(let i = 1; i < 2000; i++){
      factorial(i);
  }
  console.log();
  console.timeEnd('test');

console.log(factorial(6));
console.log(factorialRec(6));