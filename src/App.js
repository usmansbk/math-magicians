import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    };
  }

  onInputChange = (input) => this.setState({ input });

  render() {
    const { input } = this.state;

    return <Calculator input={input} onInputChange={this.onInputChange} />;
  }
}

export default App;
