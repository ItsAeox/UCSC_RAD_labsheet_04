class Rectangle{
	constructor(width, heigth){
		this.width = width;
		this.heigth = heigth;
	}

	getArea(){
		return (this.width * this.heigth);
	}
}

const rec1 = new Rectangle(12, 20);
const rec2 = new Rectangle(98, 233);

console.log("Area of the rectangle 1 is " + rec1.getArea());
console.log("Area of the rectangle 2 is " + rec2.getArea());

