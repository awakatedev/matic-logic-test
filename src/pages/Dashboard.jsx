import FibonacciSequence from '../components/FibonacciSequence';
import RepetitionsWords from '../components/RepetitionsWords';
import { FizzFuzz } from '../components/FizzBuzz';

const Dashboard = () => {
  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero__title">Jhonathan Saldarriaga's</h1>
        <h2 className="hero__subtitle">Logic Test</h2>
        <p className="hero__description">
          This is the technical-logical test for the front-end developer vacancy
          at Matic.io
        </p>
      </section>
      <FibonacciSequence />
      <RepetitionsWords />
      <FizzFuzz />
    </main>
  );
};

export default Dashboard;
