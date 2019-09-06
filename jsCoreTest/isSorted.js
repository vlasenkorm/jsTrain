'use strict';
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// isSorted([])                        // true
// isSorted([-Infinity, -5, 0, 3, 9])  // true
// isSorted([3, 9, -3, 10])            // false


function isSorted(arr){
  if (arr.constructor === Array){
    let res = true;
    
    for (let i = 0 ; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]) {
        res = false;
        break;
      }
    }return res;
  
  }else return 'Not Array'
};


  console.time('test');
  console.log(isSorted([-Infinity, -5, 0, 3, 9, -33]))  // true);
  //console.log();
  console.timeEnd('test');