import { FibonacciFunction } from './FibonacciSequence';

test('Return the Fibonacci Succession of 5', () => {
  expect(FibonacciFunction(5)).toEqual([0, 1, 1, 2, 3, 5]);
});

test('Return the Fibonacci Succession of 10', () => {
  expect(FibonacciFunction(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});

test('Return the Fibonacci Succession of 15', () => {
  expect(FibonacciFunction(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);
});

test('Return the Fibonacci Succession of 20', () => {
  expect(FibonacciFunction(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]);
});
