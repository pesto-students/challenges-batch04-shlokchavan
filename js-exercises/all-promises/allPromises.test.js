import { allPromises } from './allPromises';

describe('allPromises', () => {
  test('The function should return correct value as Promise', () => {
    expect(allPromises() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = Promise.resolve(3);
    const p2 = 42;
    const p3 = Promise.resolve('foo');
    return expect(allPromises([p1, p2, p3])).resolves.toEqual([3, 42, 'foo']);
  });
});
