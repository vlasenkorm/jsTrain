//Task3.1
/*Модуль 3 - Домашнее задание
Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.

Массив keyboard будет иметь такую струтуру: [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].


        Используя готовый массив клавиатурных строк const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
    обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:

    hello
    javascript
    trainer

        
!!!Для просмотра решения данной задачи откройте консоль!!!*/

function find(arr, value) {
        for (var i = 0; i < 3; i++){
            for(var j = 0; j < 12; j++){
                if (arr[i][j] == value){
                    var findElement = arr[i][j];
                }
            }
        }
            
                return findElement;
}
   
var arr = [];
for (var i = 0; i < 3; i++){
    arr[i] = [];
    for (var j = 0; j < 12; j++){

        arr[i][j] = 0;
    }
}

//console.log(arr);
//console.log(i,j);

var k = 12;
var numberStr = -1;
const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./"

for(i = 0; i < 3; i++ ){
    //console.log(i);
    for(j = 0; j < k; j++ ){
        //console.log(j);
        arr[i][j] = alphabet.charAt(numberStr);
        numberStr++;
        //console.log(`arr ${arr[i][j]},char ${alphabet.charAt(numberStr)}`);
        //console.log(i,j,numberStr);
    }
    k--;
    j = 0;
}
console.log(arr);
// Task3.2
const helloJS = "hello";
const javaS = "javascript";
const trainJS = "trainer";
var firstWord = "";
var secondWord = "";
var thirdWord = "";
k = 0;

for(i = 0; i < helloJS.length; i++){
    firstWord += find(arr,helloJS.charAt(k));
    k++
}
k = 0;
for(i = 0; i < javaS.length; i++){
    secondWord += find(arr,javaS.charAt(k));
    k++
}
k = 0;
for(i = 0; i < trainJS.length; i++){
    thirdWord += find(arr,trainJS.charAt(k));
    k++
}
console.log(firstWord);
console.log(secondWord);
console.log(thirdWord);