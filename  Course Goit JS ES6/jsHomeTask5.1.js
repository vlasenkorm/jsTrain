const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
  const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
  const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

//Массив строк клавиатуры из прошлого модуля преобразовать в объект keyboard следующего формата
//поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры
//поле langs содержит массив доступных языков
//поле currentLang будет содержать язык который сейчас выбран
let keyboard = new Object();

    keyboard.layouts = [];

    keyboard.layouts.Us = addKeyboardLayout(alphabet);
    keyboard.layouts.Ru = addKeyboardLayout(alphabetRu);
    keyboard.layouts.Ua = addKeyboardLayout(alphabetUa);
    //console.log(keyboard.layouts);
    
    keyboard.lengs = ['Us', 'Ru', 'Ua'];
    //console.log(keyboard.lengs);
    
    keyboard.currentLang = 'USA'
    //console.log(keyboard.currentLang);

/*Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере. 
Это обычный prompt в котором написано en-0, ru-1, ua-2. 
Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык 
и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel. 
При cancel прекратить выполнение скрипта.*/

let userChooseLang = prompt('Choose language : en-0, ru-1, ua-2', '0');

while (+userChooseLang < 0 || +userChooseLang > 2){
    alert('Wrong answer');
        userChooseLang = prompt('Choose language : en-0, ru-1, ua-2', '0');   
}    

//Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.
keyboard.currentLang = userChooseLang;

getRandCharInAlph();
//Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.
 /*
 @ in void();
 @ switch из выбраной расклвдки пользователем (keyboard.currentLang)
 @ randRow рандом ключа к объекту keyboard.layouts.Us...Ua (0/1/2)
 @ return (char);
 */  
    
function getRandCharInAlph(){
    let randRow = (Math.floor(Math.random() * 3)) + '';
    let arr = [];
    let rand = 0;
       
    switch (keyboard.currentLang) {
        case '0':
            alert( 'Choose Us' );
            for(let key in keyboard.layouts.Us){
                if (randRow == key){
                    arr = keyboard.layouts.Us[key];
                    rand = arr[Math.floor(Math.random() * (arr.length - 2))];
                    alert(rand);
                }    
            }
              break;
            case '1':
              alert( 'Choose Ru' );
              for(let key in keyboard.layouts.Ru){
                if (randRow == key){
                    arr = keyboard.layouts.Ru[key];
                    rand = arr[Math.floor(Math.random() * (arr.length))];
                    alert(rand);
                }    
            }
              break;
            case '2':
              alert( 'Choose Ua' );
              for(let key in keyboard.layouts.Ua){
                if (randRow == key){
                    arr = keyboard.layouts.Ua[key];
                    rand = arr[Math.floor(Math.random() * (arr.length))];
                    alert(rand);
                }  
               }
              break;
            default:
            alert( 'Error' );
            
    }
return rand;
}


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