import calculate from './calculate';

describe('Calculator', () => {
  test('adding two numbers', () => {
    let data = {};

    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '+') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });
});
