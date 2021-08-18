import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage, { Calculator } from './Calculator';

describe('Calculator', () => {
  it('renders page correctly', () => {
    const tree = renderer.create(<Calculator />);

    expect(tree).toMatchSnapshot();
  });

  it('renders calculator correctly', () => {
    const tree = renderer.create(<CalculatorPage />);

    expect(tree).toMatchSnapshot();
  });
});
