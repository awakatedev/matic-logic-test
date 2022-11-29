import { useState } from 'react';
import '../../assets/styles/components/section.scss';
import { FizzBuzzFunct } from './FizzBuzz';

const FizzFuzz = () => {
  const [number, setNumber] = useState(10);
  const [response, setResponse] = useState([]);

  return (
    <section className="section">
      <h3 className="section__title">FizzFuzz</h3>
      <p className="section__paragraph">
        Code a program (in javascript or typescript) that displays the numbers
        from 1 to 100 on the screen, substituting the multiples of 3 for the
        word "fizz", the multiples of 5 for "buzz" and the multiples of both,
        that is, the multiples of 3 and 5, by the word "fizz buzz".
      </p>
      <label className="section__label" htmlFor="text">
        You can change the number
      </label>
      <input
        className="section__input"
        type="number"
        name="number"
        id="number"
        defaultValue={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <ul className="section__list-result">
        {response.map((response, index) => {
          return (
            <li className="section__list-result__item" key={index}>
              {response}
            </li>
          );
        })}
      </ul>

      <button
      type='button'
        className="section__button"
        onClick={() => setResponse(FizzBuzzFunct(number))}
      >
        Run code
      </button>
    </section>
  );
};

export { FizzFuzz };
