// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diamter(d) {
    this.diamter = d;
  }
  
  set circumference(c) {
    this.circumference = c;
  }
  
  set area(a) {
    this.area = a;
  }
  
  get diamter() {
    return this.radius*2;
  }
  
  get circumference() {
    return this.diamter*Math.pi;
  }
  
  get area() {
    return Math.pow((Math.pi*this.radius), 2);
  }
}