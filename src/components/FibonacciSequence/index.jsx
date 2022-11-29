import { useState } from 'react';
import { FibonacciFunction } from './FibonacciSequence';

const FibonacciSequence = () => {
  const [number, setNumber] = useState(10);
  const [sequence, setSequence] = useState([]);

  return (
    <section className="section">
      <h3 className="section__title">FibonacciSequence</h3>
      <p className="section__paragraph">
        In mathematics, the Fibonacci sequence or series is the following
        infinite sequence of natural numbers:
        0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 ... where f (0) =
        0, f (1) = 1 and f (n) = f (n-1) + f (n-2). Code a program (in
        javascript or typescript) that solves for any number in the Fibonacci
        series.
      </p>
      <label className="section__label" htmlFor="number">
        Inserta un numero
      </label>
      <input
        className="section__input"
        type="number"
        name="number"
        id="number"
        defaultValue={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <ul className="section__list-result">
        {sequence.map((num, index) => {
          return (
            <li className="section__list-result__item" key={index}>
              {num}
            </li>
          );
        })}
      </ul>
      <button
      type='button'
        className="section__button"
        onClick={() => setSequence(FibonacciFunction(number))}
      >
        Run code
      </button>
    </section>
  );
};

export default FibonacciSequence;
