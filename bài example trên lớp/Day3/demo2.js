class Shape {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  displayInfo() {
    console.log(`Area: ${this.width * this.length}`);
  }

  displayPerimeter() {
    console.log(`Perimeter: ${2 * (this.width + this.length)}`);
  }
}

const shape1 = new Shape(5, 5);
const shape2 = new Shape(9, 9);
shape1.displayInfo();
shape2.displayPerimeter();
