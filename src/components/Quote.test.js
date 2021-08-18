import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

test('expect quote page to match working snapshot', () => {
  const quotePage = renderer.create(<Quote />).toJSON();
  expect(quotePage).toMatchSnapshot();
});
