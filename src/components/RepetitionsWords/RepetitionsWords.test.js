import { wordCountFunct } from './RepetitionsWords';

test('It should count the number of words repeated in a sentence and return an array of objects with the name of the word and the number of times it is repeated.', () => {
  expect(
    wordCountFunct([
      'Hi how are things? How are you? Are you a developer? I am also a developer',
    ]),
  ).toEqual([
    { word: 'how', stringInput: 2 },
    { word: 'are', stringInput: 3 },
    { word: 'you', stringInput: 2 },
    { word: 'a', stringInput: 2 },
    { word: 'developer', stringInput: 2 },
  ]);
});

test('It should count the number of words repeated in a sentence and return an array of objects with the name of the word and the number of times it is repeated.', () => {
  expect(
    wordCountFunct([
      "Testing the sending of a text string with repeated words for Matic.io's program logic test, the response of the function should return the repeated words and the number of times repeated.",
    ]),
  ).toEqual([
    { word: 'the', stringInput: 5 },
    { word: 'of', stringInput: 3 },
    { word: 'repeated', stringInput: 3 },
    { word: 'words', stringInput: 2 },
  ]);
});
