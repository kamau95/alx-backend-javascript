export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.evacuationWarningMessage === undefined && new.target !== Building) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    return this._sqft;
  }
}
