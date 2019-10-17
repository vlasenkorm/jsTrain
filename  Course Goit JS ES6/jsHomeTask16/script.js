/////////////////////////////////////////16
// Создать базовый класс Shape, который принимает значения цвета и координат x и y: color, initX, initY.
// Создать методы класса Shape:
//      getColor() - возвращает значение цвета.
//      setColor(val) - получает и записывает новое значение цвета.
//      getCoords() - возвращает координаты x и y.
//      moveTo(newX, newY) - принимает 2 параметра, новые значения для x и y и записывает их.
// Создать класс Rectangle который расширяет класс Shape, принимая значения цвета и начальных координат, 
//  как его родительский класс, и еще значение ширины и высоты сторон initWidth и initHeight:
// Создать методы класса Rectangle:
//      setWidth(newWidth)и setHeight(newHeight) - получают ширину/высоту и записывают новые значения.
//      getDims() - метод который возвращает значения width и height.
//      draw() - метод который имитирует рисование прямоугольника используя методы Shape и Rectangle, 
//      выводя в консоль браузера следующей информации.  
// Создать класс Circle который расширяет класс Shape, принимая значения цвета и начальных координат, 
//      как его родительский класс, и еще значение радиуса initRadius:
// Создать методы класса Circle:
//      getRadius() - возвращает текущее значение радиуса.
//      setRadius(val) - получает значение и присваивает его радиусу.
//      draw() - метод который имитирует рисование круга используя методы Shape и Circle, 
//          выводя в консоль браузера следующей информации.  


class Shape{
    constructor(color, initX, initY){
      this.color = color;
      this.initX = initX;
      this.initY = initY;
    };

    getColor(){
        console.log(this.color);
        console.log(nameToHex(this.color));
    };

    setColor(val){
        this.color = val;
    };
    getCoords(){
        return [this.initX, this.initY];
    };
    moveTo(newX, newY){
        this.initX = newX;
        this.initY = newY;
    };

};

class Rectangle extends Shape{
    constructor(color, initX, initY, initWidth, initHeight){
        super(color, initX, initY);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
        
    };

    setHeight(newHeight){
        this.initHeight = newHeight;
    };
    setWidth(newWidth){
        this.initWidth = newWidth;
    };
    getDims(){
        return [this.setWidth, this.setHeight];
    };
    draw() {
        let canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          let context = canvas.getContext('2d');
          context.lineWidth = 3;
          context.strokeStyle = nameToHex(this.color);
          context.strokeRect(this.initX,this.initY,this.initWidth,this.initHeight);
          console.log(`Your Rectangle : X = ${this.initX} px
                 Y = ${this.initY} px
                 Width = ${this.initWidth} px
                 Height = ${this.initHeight} px
                 Color = ${this.color}`);
        }
        
    };
};
  
class Circle extends Shape{
    constructor(color, initX, initY, initRadius){
    super(color, initX, initY);
    this.initRadius = initRadius;
};


    getRadius(){
        return this.initRadius;
    };

    setRadius(val){
        this.initRadius = val;
    };
 
    draw() {
        let canvas = document.getElementById('canvasC');
        if (canvas.getContext) {
          let context = canvas.getContext('2d');
    
          context.beginPath();
          context.arc(this.initX,this.initY,this.initRadius, 0, 2 * Math.PI, false)
            context.lineWidth = 3;
       context.strokeStyle = nameToHex(this.color);
            context.stroke();
            console.log(`Your Circle :   X = ${this.initX} px
                Y = ${this.initY} px
                Radius = ${this.initRadius} px
                Color = ${this.color}`);

        }
        


    };

};
//Convert nameColor to HEX
function nameToHex(name) {
    // get RGB from named color in div
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);

    let cs = window.getComputedStyle(fakeDiv),
        pv = cs.getPropertyValue("color");

    document.body.removeChild(fakeDiv);

    // code ripped from RGBToHex() (except pv is substringed)
    let rgb = pv.substr(4).split(")")[0].split(","),
        r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;
    
    return "#" + r + g + b;
};



let test = new Shape('red', 12, 22);//test

//                         color    X   Y  Width Height
let myRect = new Rectangle('blue', 102, 33, 144, 72);
myRect.draw();
//                       color    X   Y    R
let myCircl = new Circle('red', 102, 133, 20);
myCircl.draw();
