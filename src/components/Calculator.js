import React from 'react';

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
    text: '/',
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
  },
  {
    text: '0',
    className: 'grid-item span-2-col',
  },
  {
    text: '.',
  },
  {
    text: '=',
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '0',
    };
  }

  render() {
    const { display } = this.state;

    return (
      <div className="calculator">
        <p className="output">{display}</p>
        <div className="grid">
          {buttons.map(({ text, className }) => <button className={className || 'grid-item'} key={text} type="button">{text}</button>)}
        </div>
      </div>
    );
  }
}

export default Calculator;
