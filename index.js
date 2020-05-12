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
    return this.diamter;
  }
  
  get circumference() {
    return this.circumference;
  }
  
  get area() {
    return this.area;
  }
}