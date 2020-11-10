import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
  test('Debounce function should be called correctly', () => {
    const func = jest.fn();
    // const func = () => {
    //   console.log('hello');
    // };
    const debouncedFn = debounce(func, 1000);
    debouncedFn();
    expect(func).toHaveBeenCalledTimes(0); // func not called
    // Call it several times
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // pas the time
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1); // func called
  });
});
