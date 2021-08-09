import React from 'react';
import calculate from '../logic/calculate';

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

const Calculator = () => {
  const [state, setState] = React.useState({});

  const onClickHandler = React.useCallback((event) => {
    setState((prev) => {
      const output = calculate(prev, event.target.value);
      return ({
        ...prev,
        ...output,
      });
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

export default Calculator;
