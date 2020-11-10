import { accessorProperties } from './accessorProperties';

describe('Returned value should be binary(number)', () => {
  test('accessorProperties', () => {
    const obj = accessorProperties();

    // Sample 1
    obj.number = 0;
    expect(obj.number).toBe(0);

    // Sample 2
    obj.number = 15;
    expect(obj.number).toBe(1111);

    // Sample 3
    obj.number = 36;
    expect(obj.number).toBe(100100);
  });
});
