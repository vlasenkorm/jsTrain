 /*Напишите скрипт который реализует следующее поведение:

 - При нажатии на клавишу (не виртуальной клавиатуры) должно
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)

 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).

 - Звук нажатия на клавишу должен соответсвовать ноте, описанной
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.

 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши.
*/

window.addEventListener('keydown', btnKeydown);

//Для запоминания активной кнопки
const activeBtn = {
    node: null
};

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const sound = document.querySelector('#slideThree');
const labelCheckbox = document.querySelector('#labelCheckbox');
labelCheckbox.addEventListener('click', statusSound);


function statusSound(){
    sound.value = sound.value === 'None'? 'Active' : 'None';
}


// Удаляем у всех кнопок класс active и добавляем его нажатой кнопке + музыка
function btnKeydown(evt){
    
    let keyboardBTN = document.querySelectorAll('.keyboard__btn');
    
    if(evt.target !== this){
        keyboardBTN.forEach(link => link.classList.remove('keyboard__btn--active'));
    }
    
    keyboardBTN.forEach(el => {
        if (el.textContent === evt.key.toLowerCase() || el.textContent === evt.code.toLowerCase()) {
            el.classList.add('keyboard__btn--active');
            if(sound.value === 'None') playSound(el.getAttribute('data-note'));
            //return true
        }
    }
        );
}
