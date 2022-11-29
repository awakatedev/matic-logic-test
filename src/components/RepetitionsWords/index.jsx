import { useState } from 'react';
import '../../assets/styles/components/section.scss';
import { wordCountFunct } from './RepetitionsWords.js';

const RepetitionsWords = () => {
  const [stringInput, setStringInput] = useState([
    'Hi how are things? How are you? Are you a developer? I am also a developer',
  ]);
  const [finalResponse, setFinalResponse] = useState([]);

  return (
    <section className="section">
      <h3 className="section__title">Repetitions Words</h3>
      <p className="section__paragraph">
        Given a given input text, Code a program (in javascript or typescript)
        that displays the stringInput of repetitions of each word. Sample text:
        "Hi how are things? How are you? Are you a developer? I am also a
        developer"
      </p>
      <label className="section__label" htmlFor="text">
        You can change the text
      </label>
      <input
        className="section__input"
        type="text"
        name="text"
        id="text"
        defaultValue={stringInput}
        onChange={(e) => {
          setStringInput([e.target.value]);
        }}
      />

      <ul className="section__list-result">
        {finalResponse.map((finalResponse) => {
          return (
            <li className="section__list-result__item" key={finalResponse.word}>
              <p>{`Word: ${finalResponse.word} - Number of repetitions: ${finalResponse.stringInput}`}</p>
            </li>
          );
        })}
      </ul>

      <button
      type='button'
        className="section__button"
        onClick={() => {
          setFinalResponse(wordCountFunct(stringInput));
        }}
      >
        Run code
      </button>
    </section>
  );
};

export default RepetitionsWords;
