import calculate from './calculate';

describe('Calculator quick maths', () => {
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

  test('/ division is not supported', () => {
    const unsupportedOperation = () => {
      let data = {};

      data = { ...data, ...calculate(data, '4') };
      data = { ...data, ...calculate(data, '/') };
      data = { ...data, ...calculate(data, '2') };
      data = { ...data, ...calculate(data, '=') };

      return data;
    };

    expect(() => unsupportedOperation()).toThrow();
  });
});
