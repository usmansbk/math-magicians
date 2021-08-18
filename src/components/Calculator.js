import { useCallback, useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const buttons = [
  {
    text: 'AC',
  },
  {
    text: '+/-',
  },
  {
    text: '%',
  },
  {
    text: '÷',
    className: 'bg-orange',
  },
  {
    text: '7',
  },
  {
    text: '8',
  },
  {
    text: '9',
  },
  {
    text: 'x',
    className: 'bg-orange',
  },
  {
    text: '4',
  },
  {
    text: '5',
  },
  {
    text: '6',
  },
  {
    text: '-',
    className: 'bg-orange',
  },
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '+',
    className: 'bg-orange',
  },
  {
    text: '0',
    className: 'span-2-col',
  },
  {
    text: '.',
  },
  {
    text: '=',
    className: 'bg-orange',
  },
];

export const Calculator = () => {
  const [state, setState] = useState({});

  const onClickHandler = useCallback((event) => {
    setState((prev) => {
      try {
        const output = calculate(prev, event.target.value);
        return ({
          ...prev,
          ...output,
        });
      } catch (e) {
        return prev;
      }
    });
  }, []);

  const { total, next, operation } = state;
  const display = (total || '') + (operation || '') + (next || '');

  return (
    <div className="calculator">
      <div className="output">
        <p>{display || '0'}</p>
      </div>
      <div className="grid">
        {buttons.map(({ text, className }) => (
          <input
            value={text}
            className={`button grid-item ${className || ''}`}
            key={text}
            type="button"
            onClick={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

const CalculatorPage = () => (
  <section className="calculator-container">
    <h2 className="section-title">Let&apos;s do some math</h2>
    <div className="calculator-content">
      <Calculator />
    </div>
  </section>
);

export default CalculatorPage;
