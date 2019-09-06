  'use strict';
//Создайте собственную реализацию функции forEach(). 

//Создайте собственную реализацию функции filter().

//Создайте собственную реализацию функции reduce().



  function forEachMod(arr, callback) {
    let i, 
        length = arr.length;
  
    for (i = 0; i < length; i++) {
      callback( arr[i], i, arr)
    }
  }
  
  function filterMod (arr, callback ){
    let i, 
        length = arr.length, 
        results = [];

    for(i = 0; i < length; i++){
      if(callback( arr[i], i, arr)){
        results.push(arr[i]);
      }
    }
    return results;
  };
  
  
  function reduceMod (arr, callback, startValue) {
    var i, 
        length = arr.length,
        result = startValue;
        
    for (i = 0; i < length; i = i + 1) {
      result = callback( result, arr[i], i, arr);
    }
    return result;
  };
  
  
  
  
    
    let test = [1, 2, 3, 4];
    console.log(filterMod(test ,n => n < 3))    // [1, 2]
    
    
    
    
    var Person = function(name) {
      this.name = name;
    };
    
    Person.prototype.say = function(phrase) {
      console.log(this.name + ' says ' + phrase);
    }
    
    Person.prototype.mumble = function(phrases) {
      forEachMod(phrases, phrase => this.say(phrase), this);  
    }
    
    var johnDoe = new Person('John Doe');
    johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);
    
    