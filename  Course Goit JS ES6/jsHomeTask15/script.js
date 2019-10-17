//Создать класс Timer с полями startTime, stopTime и interval. 
//Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
// Для класса Timer создать методы start и stop, getTime.
// Создать экземпляр класса Timer, пусть он называется stopwatch.
// При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime 
// в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
// Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.

let btnStart = document.getElementById('start');
let btnStop = document.getElementById('stop');

class Timer{
    constructor(startTime, stopTime){
      this.startTime = startTime;
      this.stopTime = stopTime;
      this.interval = stopTime - startTime;
    };

    start(btn){
        btn.addEventListener('click', () => {
        this.startTime = Date.now();
        console.log(`Pressed start : ${new Date(this.startTime)}
        start time =  ${this.startTime}`);
    })
};
    stop(btn){
        //stop
        btn.addEventListener('click', () => {
        this.stopTime = Date.now();
        this.interval = this.stopTime - this.startTime;
        console.log(`Pressed stop : ${new Date(this.startTime)}
        stop time =  ${this.stopTime}`);
        console.log(stopwatch);
        console.log(`this.interval = ${stopwatch.getTime()}`);
    })
};

    getTime(){
        return this.interval;
    };
    
     static timeToNY() {
        let nyDate = new Date(2020, 0, 1, 0,0,0,0);
        nyDate = nyDate.getTime() - Date.now();
        return Math.round(nyDate / (1000*60*60*24))
       };
  }
  
  
  let stopwatch = new Timer(1,4);

  stopwatch.start(btnStart);
  stopwatch.stop(btnStop); 
  console.log(`Days to New Year : ${Timer.timeToNY()}`);
 