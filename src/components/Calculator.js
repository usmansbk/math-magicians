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

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = calculate(null, 'AC');
  }

  onClickHandler = (event) => {
    this.setState((prevState) => calculate(prevState, event.target.value));
  };

  formatOutput = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  render() {
    return (
      <div className="calculator">
        <div className="output">
          <p>{this.formatOutput()}</p>
        </div>
        <div className="grid">
          {buttons.map(({ text, className }) => (
            <input
              value={text}
              className={`button grid-item ${className || ''}`}
              key={text}
              type="button"
              onClick={this.onClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
