/* eslint-disable no-console */
import { throttle } from './throttle';

jest.useFakeTimers();
describe('throttle', () => {
  test('Will run after ~5s and only print "Hello World"', () => {
    const func = (arg) => console.log(arg);
    console.log = jest.fn();
    const throttledFn = throttle(func, 5000);
    throttledFn('Hello World');
    throttledFn('My World');
    throttledFn('Your World');
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Hello World');
  });
});
