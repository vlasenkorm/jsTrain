/*
    Создать компонент счетчика времени.</li>
        <li>Простой прямоугольник который показывает время
            со старта упражения и до того момента когда все
            клавиши были верно нажаты.</li>
        <li>На входе есть строка символов для упражнения.</p>
            Написать метод countKPS() который,по окончанию упражнения,
            возвращает кол-во верных клавишь в секунду которое было нажато за
            время выполнения упражнения.</li>
        <li>Записать результат в localStorage, но только в том случае если
            он лучше чем тот что уже есть в localStorage.</li>
        <li>При повторном посещении страницы надо брать то что записано
            в localStorage и вешать на страницу, это будет компонент
            лучшего результата.</li>
      */
       
      
//обьект для инфы
     let infoUser = {
            bestTime:0,
            userTime:0,
            countError:0,
            speedForce:0
        }
        // обьект таймер для времени
       const timer = {
        startTime: "",
        currentTime: "",
        id: "",
        
        searchNumDifChars: function difChars(a1,a2){
         let i = 0;
     a1.forEach(function (el,key){
             if (el !== a2[key]){
                i++ 
             };
         })
         return i;
 },
 
 userInfo: function infoUserAdd(info){
     timerData.textContent = info.userTime;//time
     bestTimeData.textContent  = info.bestTime;// best
     speedData.textContent = info.speedForce.toFixed(2);//speed
     countData.textContent = info.countError;//countError
 },
     };


        //достаем инфу из хранилища
    infoUser = JSON.parse(window.localStorage.getItem('infoUser-Datas'));
        
    //сохраняем в хранилище при закрытии
      window.onunload = function() {
        window.localStorage.setItem('infoUser-Datas', JSON.stringify(infoUser));
      };

      
        const countData = document.querySelector('.count');
       const speedData = document.querySelector('.speedDial');
        const timerData = document.querySelector('.timer');
       const bestTimeData = document.querySelector('.bestTime');
       //infoUser.bestTime = 10;
       bestTimeData.textContent  = infoUser.bestTime;

        let displayStr = "";
       let userInputChar = '';
       const keyboardBTN = document.querySelectorAll('.keyboard__btn');
       
       const timerOutput = document.querySelector(".timer");
       const clockface = document.querySelector(".clock__time");
       const startBtn = document.querySelector("#start");
       const stopBtn = document.querySelector("#stop");
       const controls = document.querySelector(".lang-ctrls__body");
       const buttons = controls.querySelectorAll("button");
       

       
       
       controls.addEventListener("click", setActiveBtn);
       startBtn.addEventListener("click", startTimer);
       stopBtn.addEventListener("click", stopTimer);
      
       //start_time
       function startTimer() {
        clearInterval(timer.id);
        userInputChar = '';
           timer.startTime = new Date();
           timer.id = setInterval(() =>
               {timer.currentTime = new Date() - timer.startTime;
                   updateClockface(timer.currentTime);
               }, 0);
       }
       
       //stop_time
       function stopTimer() {
           clearInterval(timer.id);
           timer.currentTime = getFormattedTime(0);
           clockface.textContent = timer.currentTime;
       }
      
       
       /*
       * Обновляет поле счетчика новым значением при вызове
       * аргумент time это кол-во миллисекунд
       */
       function updateClockface(time) {
           clockface.textContent = getFormattedTime(time);
       }
       
       /*
       * Возвращает форматированое время
       * аргумент time это кол-во миллисекунд
       * возвращает строку времени формата 'xx:xx:xxx'.
       */
       function getFormattedTime(time) {
           const date = new Date(time);
           const mt =
               date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
           const sc =
               date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
           const ms =
               date.getMilliseconds() < 10
                   ? "00" + date.getMilliseconds()
                   : date.getMilliseconds() < 100
                   ? "0" + date.getMilliseconds()
                   : date.getMilliseconds();
       
           return `${mt}:${sc}:${ms}`;
       }
       
       //Подсветка активной кнопки
       function setActiveBtn(e) {
           Array.from(buttons, elem => elem.classList.remove("lang-ctrls__btn--active"));
           let elem = e.target;
       
           if (e.target.classList.contains("material-icons")) {
               elem = elem.parentNode;
           }
           if (!elem.classList.contains("lang-ctrls__btn")) {
               return false;
           }
       
           elem.classList.add("lang-ctrls__btn--active");
       }



       //Keyboard_OP
       window.addEventListener('keydown', btnKeydown);
    
       // Удаляем у всех кнопок класс active и добавляем его нажатой кнопке + музыка
       // 
       function btnKeydown(evt){
           
           if(evt.target !== this){
               keyboardBTN.forEach(link => link.classList.remove('keyboard__btn--active'));
           }
           
           displayStr = document.querySelector('.inputUser').textContent;
           let charsArr = displayStr.split("");
            
           keyboardBTN.forEach(el => {
               if (el.textContent === evt.key.toLowerCase() || el.textContent === evt.code.toLowerCase()) {
                   el.classList.add('keyboard__btn--active');

                    userInputChar += evt.key;

// Сравниваем строки ввода и заданую выщитуем инфрмацию + вывод инфы
                if (displayStr.length === userInputChar.length){
                    let charsUserArr = userInputChar.split("");
                    
                    infoUser.countError = timer.searchNumDifChars(charsArr,charsUserArr);
                    
                    infoUser.userTime = timer.currentTime / 1000;
                    infoUser.speedForce  = (displayStr.length - infoUser.countError) / infoUser.userTime;
                    
                    if (infoUser.userTime < infoUser.bestTime || infoUser.bestTime === 0) {
                        infoUser.bestTime = infoUser.userTime;
                     }
                     
                    stopTimer();
                    
                    timer.userInfo(infoUser);
                    
                    userInputChar = '';
                };


                if(sound.value === 'None') playSound(el.getAttribute('data-note'));
               }
           }
               );
       }//Keydown_ED



//--Music_OP
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
}//--Music_ED



