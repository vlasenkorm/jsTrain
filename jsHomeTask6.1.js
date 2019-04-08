/*Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив символов алфавита. chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

Добавьте свойство charCount и метод setCharCount. Метод делает запрос через prompt о количестве символов,
которые пользователь должен будет набрать.

Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом. 
Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, 
используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).

Создайте свойство task и метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами 
из массива chars.

Создайте метод startTask, который с помощью prompt выводит строку из массива task 
и просит набрать эту строку в этом же prompt сообщении.

-->Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput 
и task посимвольно. Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.

Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - 
напишите количество ошибок и пожелание успехов в следующем упражнении.

Все свойства и методы должны быть внутри одного объекта keyTrainer, но вызов по очереди 
всех методов поместите внутри функции run и затем вызовите эту функцию.

Start
*/


var keyTrainer = {
    
  //Создайте объект keyTrainer, содержащий нужные свойства
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'] ,
  task: [],
  userInput: [],
  charCount: '',
  userErrors: '',
  c: 0, //counter
  
  //метод setCharCount. Метод делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.
  setCharCount: function userAnsver(){
      this.charCount = prompt('Choose char count: ', 5);   
  while (this.c == 0){
      if (this.checkPositiveInteger(this.charCount)){
          if(+this.charCount > 0){
              alert('Number');
              this.c++;
          }else{
              alert('Negative number');
              this.charCount = prompt('Choose char count: ', 5);
          };// ? тут оставлять (;) или не надо ? 
      }else{   
      alert('Not number');
      this.charCount = prompt('Choose char count: ', 5);
      };// ? как и тут ? 
  };// ? как и тут ? 
  },
  
  /*метод checkPositiveInteger, который проверяет является ли число целым положительным числом. 
Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, 
используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).*/

  checkPositiveInteger: function checkNumber(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
  },
  /*метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами 
из массива chars.*/

  createTask: function taskAddRandonChar(n){    
      for (let i = 0; i <= (+n - 1); i++){
          this.task[i] = 0;
      }
      this.task = this.task.map(char => char = this.chars[Math.floor(Math.random() * this.chars.length)]);
  },
  
  /*Создайте метод startTask, который с помощью prompt выводит строку из массива task 
и просит набрать эту строку в этом же prompt сообщении.
  Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput 
и task посимвольно. Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.
  Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - 
напишите количество ошибок и пожелание успехов в следующем упражнении.*/
  
startTask: function ggg(){
      
  const str = prompt(`Enter this character :  ${this.task}`, '');
      if (str.length == keyTrainer.task.length){
      this.userInput = str.split('');
      this.userInput.map(function(elem, i, arr){
          if (elem != keyTrainer.task[i]){//??? почему к this.task не определено а  keyTrainer.task работает вроде нахожусь там же ??? .
              keyTrainer.userErrors += elem;
          }
    });
    if (this.userErrors.length == 0){
        alert('Congrats');
    }else{
        alert(`You make ${this.userErrors.length} mistake 
          it\`s: ${this.userErrors} `);
    }
  }else{
      alert('Wrong input')
  }
}
};
/*Все свойства и методы должны быть внутри одного объекта keyTrainer, но вызов по очереди 
всех методов поместите внутри функции run и затем вызовите эту функцию.*/

run();
 
function run(){
      keyTrainer.setCharCount();
      keyTrainer.createTask(keyTrainer.charCount);
      console.log(keyTrainer.task);
      keyTrainer.startTask();
      console.log(keyTrainer.userInput);
      console.log(keyTrainer.userErrors);
}