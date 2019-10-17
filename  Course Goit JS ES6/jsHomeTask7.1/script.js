let createKeyboard = {

element: document.querySelector('#keyboard'),// input
fragment: document.createDocumentFragment(),

line:['firstLine','secondLine', 'thirdLine'],
firstLine: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
secondLine: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
thirdLine: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
//div: document.createElement('div'),

/* Метод реализует HTML участок кода
                <!--<div id="firstLine">
                    <div>q</div><div>w</div><div>e</div><div>r</div><div>t</div><div>y</div><div>u</div><div>i</div><div>o</div><div>p</div>
                </div>
                <div id="secondLine">
                    <div>a</div><div>s</div><div>d</div><div>f</div><div>g</div><div>h</div><div>j</div><div>k</div><div>l</div>
                </div>
                <div id="thirdLine">
                    <div>z</div><div>x</div><div>c</div><div>v</div><div>b</div><div>n</div><div>m</div>
                </div>-->

*/




createLayout: function createKey(){
    

    this.line.map((lin,i) => {
    let dv = document.createElement('div');
    dv.setAttribute('id', `${lin}`) ;
    this.fragment.appendChild(dv);
    
    /*this.>>lin<<.map((char) => { //Жаль не могу подставлять массивы через параметр 
        let dv = document.createElement('div');
        dv.textContent = char;
        this.fragment.children[i].insertAdjacentElement("beforeEnd", dv);
    });*/

    });
    
   
    //--<div>

    this.firstLine.map((char) => {
        let dv = document.createElement('div');
        dv.textContent = char;
        this.fragment.children[0].insertAdjacentElement("beforeEnd", dv);
    });
    
    this.secondLine.map((char) => {
        let dv = document.createElement('div');
        dv.textContent = char;
        this.fragment.children[1].insertAdjacentElement("beforeEnd", dv);
    });
    
    this.thirdLine.map((char) => {
        let dv = document.createElement('div');
        dv.textContent = char;
        this.fragment.children[2].insertAdjacentElement("beforeEnd", dv);
    });
   
this.element.appendChild(this.fragment);
}

};

createKeyboard.createLayout();