import {
  filter,
  invert,
  map,
  // merge, all, some,
} from './objectUtils';

// write your own test cases
describe('Object Utils', () => {
  const numberObj = {
    a: 5,
    b: 8,
  };
  test('Custom Map function', () => {
    const squareOfNumber = ([key, value]) => ([key, value * value]);
    expect(map(numberObj, squareOfNumber)).toEqual({
      a: 25,
      b: 64,
    });
  });

  test('Custom Filter function', () => {
    const evenNumbers = ([key, value]) => (key && value % 2 === 0);
    expect(filter(numberObj, evenNumbers)).toEqual({
      b: 8,
    });
  });

  test('Custom Invert function', () => {
    expect(invert(numberObj)).toEqual({
      5: 'a',
      8: 'b',
    });
  });
});
