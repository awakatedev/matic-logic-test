export function wordCountFunct(stringInput) {
  const response = stringInput.reduce((newMap, string) => {
    const regex = /[.,?\s\/#!$%\^&\*;:{}=\-_`~()”“"…]/g;

    string
      .toLowerCase()
      .split(regex)
      .forEach((word) => {
        newMap.set(word, newMap.has(word) ? newMap.get(word) + 1 : 1);
      });

    return newMap;
  }, new Map());

  const repeatedWords = [];

  response.forEach((stringInput, word) => {
    if (stringInput !== 1 && word !== '') {
      repeatedWords.push({ word, stringInput });
    }
  });

  return repeatedWords;
}
