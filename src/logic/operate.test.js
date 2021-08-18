import operate from './operate';

describe('Supported calculator operators', () => {
  test('2 + 2 = 4', () => {
    const a = 2;
    const b = 2;

    const answer = operate(a, b, '+');

    expect(answer).toBe('4');
  });

  test('4 + 1 = 3', () => {
    const a = 4;
    const b = 1;

    const answer = operate(a, b, '-');

    expect(answer).toBe('3');
  });

  test('-2 + 2 = 0', () => {
    const a = -2;
    const b = 2;

    const answer = operate(a, b, '+');

    expect(answer).toBe('0');
  });

  test('2 x 2 = 4', () => {
    const a = 2;
    const b = 2;

    const answer = operate(a, b, 'x');

    expect(answer).toBe('4');
  });

  test('4 ÷ 2 = 2', () => {
    const a = 4;
    const b = 2;

    const answer = operate(a, b, '÷');

    expect(answer).toBe('2');
  });

  test('3 % 2 = 1', () => {
    const a = 3;
    const b = 2;

    const answer = operate(a, b, '%');

    expect(answer).toBe('1');
  });
});

describe('Invalid operations', () => {
  test('* is not supported', () => {
    const a = 2;
    const b = 2;

    const unsupportedOperation = () => operate(a, b, '*');

    expect(() => unsupportedOperation()).toThrow();
  });

  test('/ division is not supported', () => {
    const a = 2;
    const b = 2;

    const unsupportedOperation = () => operate(a, b, '/');

    expect(() => unsupportedOperation()).toThrow();
  });

  test('zero division should throw error', () => {
    const a = 2;
    const b = 0;

    const zeroDivision = () => operate(a, b, '/');

    expect(() => zeroDivision()).toThrow();
  });
});
