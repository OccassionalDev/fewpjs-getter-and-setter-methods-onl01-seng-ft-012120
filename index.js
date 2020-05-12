// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diamter() {
    this.diamter = this.radius*2;
  }
  
  set circumference(c) {
    this.circumference = c;
  }
  
  set area(a) {
    this.area = a;
  }
  
  get diamter() {
    return this.diamter;
  }
  
  get circumference() {
    return this.diamter*Math.pi;
  }
  
  get area() {
    return Math.pow((Math.pi*this.radius), 2);
  }
}