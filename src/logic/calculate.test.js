import calculate from './calculate';

describe('Quick maths', () => {
  test('2 + 2 = 4', () => {
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

  test('4 - 1 = 3', () => {
    let data = {};

    data = { ...data, ...calculate(data, '4') };
    data = { ...data, ...calculate(data, '-') };
    data = { ...data, ...calculate(data, '1') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  test('-2 + 2 = 0', () => {
    let data = {};

    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '+/-') };
    data = { ...data, ...calculate(data, '+') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('2 x 2 = 4', () => {
    let data = {};

    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, 'x') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  test('2.2 x 2 = 4.4', () => {
    let data = {};

    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '.') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, 'x') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '4.4',
      next: null,
      operation: null,
    });
  });

  test('4 ÷ 2 = 2', () => {
    let data = {};

    data = { ...data, ...calculate(data, '4') };
    data = { ...data, ...calculate(data, '÷') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });

  test('3 % 2 = 1', () => {
    let data = {};

    data = { ...data, ...calculate(data, '3') };
    data = { ...data, ...calculate(data, '%') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };

    expect(data).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });

  test('invalid binary operation should throw error', () => {
    const invalidBinaryOperation = () => {
      let data = {};

      data = { ...data, ...calculate(data, '÷') };
      data = { ...data, ...calculate(data, '2') };
      data = { ...data, ...calculate(data, '=') };

      return data;
    };

    expect(() => invalidBinaryOperation()).toThrow('one.div is not a function');
  });
});
