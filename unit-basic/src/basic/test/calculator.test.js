const Calculator = require('../calculator');

describe('Calculator', () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  it('inits with 0', () => {
    expect(calc.value).toBe(0);
  });

  it('sets', () => {
    calc.set(7);

    expect(calc.value).toBe(7);
  });

  it('clear', () => {
    calc.set(7);
    calc.clear();
    expect(calc.value).toBe(0);
  });

  it('adds', () => {
    calc.set(7);
    calc.add(5);
    expect(calc.value).toBe(12);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      calc.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    calc.set(7);
    calc.subtract(1);
    expect(calc.value).toBe(6);
  });

  it('multiplies', () => {
    calc.set(5);
    calc.multiply(2);
    expect(calc.value).toBe(10);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calc.divide(0);
      expect(calc.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      calc.set(1);
      calc.divide(0);
      expect(calc.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      calc.set(4);
      calc.divide(4);
      expect(calc.value).toBe(1);
    });
  });
});
