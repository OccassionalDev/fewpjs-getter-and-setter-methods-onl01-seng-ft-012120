// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diamter(d) {
    this.radius = d/2;
  }
  
  set circumference(c) {
    this.radius = c/(Math.pi * 2);
  }
  
  set area(a) {
    this.radius = Math.sqrt(a/Math.pi);
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