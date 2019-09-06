'use strict';


// Проверка на массив
//                                                                      Chrome            for
// Object.prototype.toString.call(variable) === '[object Array]'	  13.5 m.sec        1000000
// Array.isArray(variable)	                                          3.9 m.sec         1000000
// variable.constructor === Array	                                  2.5 m.sec         1000000
// variable instanceof Array	                                      4.7 m.sec         1000000




let variable = [2,3,5,8];

console.log('Object.prototype.toString.call(variable) === [object Array]');
console.time('test');

for(let i = 1; i < 1000000; i++){
    Object.prototype.toString.call(variable) === '[object Array]'
    }

console.timeEnd('test');
console.log(Object.prototype.toString.call(variable) === '[object Array]');//Возвращает true если массив



console.log('Array.isArray(variable)');
console.time('test');

for(let i = 1; i < 1000000; i++){
    Array.isArray(variable)
    }

console.timeEnd('test');
console.log(Array.isArray(variable));//Возвращает true если массив


console.log('variable.constructor === Array');
console.time('test');
for(let i = 1; i < 1000000; i++){
    variable.constructor === Array
}

console.timeEnd('test');
console.log(variable.constructor === Array);//Возвращает true если массив


console.log('variable instanceof Array');
console.time('test');
for(let i = 1; i < 1000000; i++){
    variable instanceof Array
    }

console.timeEnd('test');
console.log(variable instanceof Array);//Возвращает true если массив