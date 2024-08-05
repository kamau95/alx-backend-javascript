export default class Car {
  constructor(color, brand, motor) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
