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
      input: '0',
    };
  }

  render() {
    const { input } = this.state;

    return (
      <div className="calculator">
        <p className="display">{input}</p>
        <div className="buttons">
          {buttons.map(({ text }) => <button key={text} type="button">{text}</button>)}
        </div>
      </div>
    );
  }
}

export default Calculator;
