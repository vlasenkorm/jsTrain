/*Модуль 4 - Домашнее задание
Используя логику создания массива клавиатурных строк, 

создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и 
возвращает массив-массивов клавиатурных строк.

 Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и 
 возвращает случайную букву из этой строки.

 Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.
!
!!Результаты решения отображены в консоли этой страницы.!!!

Перейти к дополнительному заданию*/

//Task1
    const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    console.log(addKeyboardLayout(alphabet));
    const numberUser = prompt('Enter Number from 0 to 2' , 0);
    console.log(getRandCharInRow(numberUser));
    console.log(getRandCharInAlph());

function addKeyboardLayout(str){
    let arr = [];
    let lenghtRowChar = (str.length / 3 + 1);
    for (let i = 0; i < 3; i++){
        arr[i] = [];
        for (let j = 0; j < lenghtRowChar; j++){
            arr[i][j] = 0;
            
        }lenghtRowChar--;
    }
    let c = 0;
    arr = arr.map(charAlphabet => charAlphabet.map(charAlphabetInElement => charAlphabetInElement = str.charAt(c++) ) );
return arr;
}

function getRandCharInRow(numberRow){
    let arr = []; 
    let rand = 0;
    switch (numberRow) {
        case '0':
        //alert( 'Choose 2 row' );
          arr = addKeyboardLayout(alphabet)[0];
          rand = arr[Math.floor(Math.random() * (arr.length - 2))];
          break;
        case '1':
          //alert( 'Choose 2 row' );
          arr = addKeyboardLayout(alphabet)[1];
          rand = arr[Math.floor(Math.random() * (arr.length - 2))];
          break;
        case '2':
          //alert( 'Choose 3 row' );
          arr = addKeyboardLayout(alphabet)[2];
          rand = arr[Math.floor(Math.random() * (arr.length - 3))];
          break;
        default:
          alert( 'Does not exist row' );
        
      }
return rand;
}

function getRandCharInAlph(){
    let arr = [];
    arr = addKeyboardLayout(alphabet);
    let randRow = (Math.floor(Math.random() * 3)) + '';
    let randAllRow = getRandCharInRow(randRow)
return randAllRow;
}
