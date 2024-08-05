import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    return this._amount;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
