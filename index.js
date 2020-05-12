// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diamter(d) {
    this.radius = d/2;
  }
  
  set circumference() {
    this.circumference = (this.radius*2)*Math.pi;
  }
  
  set area(a) {
    this.area = Math.pow((Math.pi*this.radius), 2);
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