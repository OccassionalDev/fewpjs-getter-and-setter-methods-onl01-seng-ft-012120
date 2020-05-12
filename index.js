// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diamter() {
    this.diamter = this.radius*2;
  }
  
  set circumference() {
    this.circumference = this.diamter*Math.pi;
  }
  
  set area(a) {
    this.area = Math.pow((Math.pi*this.radius), 2);
  }
  
  get diamter() {
    return this.diamter = this.radius*2;;
  }
  
  get circumference() {
    return this.diamter;
  }
  
  get area() {
    return this.area;
  }
}