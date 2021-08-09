import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: null,
    };
  }

  render() {
    const { output } = this.state;

    return <Calculator output={output} />;
  }
}

export default App;
