import { convertNumber } from './numberToWords';

describe('the function should return the number words', () => {
  it('should return zero', () => {
    const expected = 'zero';
    const actual = convertNumber(0);
    expect(actual).toBe(expected);
  });

  it('should return one', () => {
    const expected = 'one';
    const actual = convertNumber(1);
    expect(actual).toBe(expected);
  });

  xit('should return twenty-one', () => {
    const expected = 'twenty-one';
    const actual = convertNumber(21);
    expect(actual).toBe(expected);
  });

  xit('should return one hundred and twenty-three', () => {
    const expected = 'one hundred and twenty-three';
    const actual = convertNumber(123);
    expect(actual).toBe(expected);
  });

  xit('should return one thousand and five', () => {
    const expected = 'one thousand and five';
    const actual = convertNumber(1005);
    expect(actual).toBe(expected);
  });

  xit('should return one thousand and forty-two', () => {
    const expected = 'one thousand and forty-two';
    const actual = convertNumber(1042);
    expect(actual).toBe(expected);
  });

  xit('should return one thousand one hundred and five', () => {
    const expected = 'one thousand one hundred and five';
    const actual = convertNumber(1105);
    expect(actual).toBe(expected);
  });

  xit('should return fifty-six million nine hundred and forty-five thousand seven hundred and eighty-one', () => {
    const expected =
      'fifty-six million nine hundred and forty-five thousand seven hundred and eighty-one';
    const actual = convertNumber(56945781);
    expect(actual).toBe(expected);
  });

  xit('should return nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine', () => {
    const expected =
      'nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine';
    const actual = convertNumber(999999999);
    expect(actual).toBe(expected);
  });
});
