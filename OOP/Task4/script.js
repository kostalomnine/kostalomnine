class Rectangle {

   constructor(width, height) {

   	this.elem = document.createElement('div');
   	this.elem.style.width = width + 'px';
    this.elem.style.height = height + 'px';
    this.elem.style.border = '1px solid red';

    document.body.appendChild(this.elem);
   }

	getWidth() {
		return parseInt(this.elem.style.width);
	}

	setWidth(numb) {
		this.elem.style.width = numb + 'px';
	}

	getheight() {
		return parseInt(this.elem.style.height);
	}

	setheight(number) {
		this.elem.style.height = number + 'px';
	}

}

var box = new Rectangle(500 , 350);
var box1 = new Rectangle(400, 400)

console.log(box.getheight()); //получаем установленные строкой выше значения
console.log(box.getWidth());

box.setheight(50); // ставим новые значения
box.setWidth(100);

console.log(box.getheight()); // выводим новые значения
console.log(box.getWidth());