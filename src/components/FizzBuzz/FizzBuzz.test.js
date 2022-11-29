import { FizzBuzzFunct } from './FizzBuzz';

test('Returns numbers divisible by 3 as Fizz, those divisible by 5 as Buzz and those divisible by 3 and 5 as Fizz Buzz. Number 5 ', () => {
  expect(FizzBuzzFunct(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
});

test('Returns numbers divisible by 3 as Fizz, those divisible by 5 as Buzz and those divisible by 3 and 5 as Fizz Buzz. Number 10', () => {
  expect(FizzBuzzFunct(10)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
});

test('Returns numbers divisible by 3 as Fizz, those divisible by 5 as Buzz and those divisible by 3 and 5 as Fizz Buzz. Number 15', () => {
  expect(FizzBuzzFunct(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz']);
});
