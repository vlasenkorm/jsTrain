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


    const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    console.log(addKeyboardLayout(alphabet));
    const numberUser = prompt('Enter Number from 0 to 2' , 0);
    console.log(getRandCharInRow(numberUser));
    console.log(getRandCharInAlph());

//Task1
    /*создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и 
    возвращает массив-массивов клавиатурных строк. */
function addKeyboardLayout(str){
    let arr = [];
    let lenghtRowChar = (str.length / 3 + 1);
    for (let i = 0; i < 3; i++){
        arr[i] = [];
        for (let j = 0; j < lenghtRowChar; j++){
            arr[i][j] = 0;
            
        }lenghtRowChar--;
    }   //Array fill ^^^
    let c = 0;
    arr = arr.map(charAlphabet => charAlphabet.map(charAlphabetInElement => charAlphabetInElement = str.charAt(c++) ) );
    //Assigned the array elements to the created array ^^^
return arr;
}

/*Task2
Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и 
 возвращает случайную букву из этой строки.*//

function getRandCharInRow(numberRow){
    let arr = []; 
    let rand = 0;
    switch (numberRow) {
        case '0':
        //alert( 'Choose 1 row' );
          arr = addKeyboardLayout(alphabet)[0];
          rand = arr[Math.floor(Math.random() * (arr.length - 2))];//Random element from array, exclude char '[' &']'
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
/*Task 3
Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.*/
function getRandCharInAlph(){
    let arr = [];
    arr = addKeyboardLayout(alphabet);
    let randRow = (Math.floor(Math.random() * 3)) + '';
    let randAllRow = getRandCharInRow(randRow)
    //Choose random char alphabet
return randAllRow;
}
