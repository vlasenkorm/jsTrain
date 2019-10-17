// Создать две кнопки в HTML: start и stop.
// Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
// При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
// При нажатии на stop, значение interval выводится в консоль.
// let start = document.getElementById('start');
let stop = document.getElementById('stop');
let info = document.getElementById('info');

function Timer(startTime, stopTime, interval){
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = interval;
}
Timer.prototype.start = function(){
    this.startTime = Date.now();
    console.log(`
    startTime ${this.startTime}
    stopTime ${this.stopTime}
    interval ${this.interval}`)
}

Timer.prototype.stop = function(){
    this.stopTime = Date.now();
    this.interval = (this.stopTime - this.startTime)/1000;
    console.log(`
    startTime ${this.startTime}
    stopTime ${this.stopTime}
    interval ${this.interval} sec`)
}
let timer1 = new Timer(0,0,0);
start.addEventListener('click', () => timer1.start() );
//timer1.start()^^;
stop.addEventListener('click', () => timer1.stop() );
//timer1.stop()^^^;

//console.log(start,stop,info);