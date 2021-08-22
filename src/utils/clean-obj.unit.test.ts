import { cleanObj } from './clean-obj';

describe('cleanObj', () => {
  it('should return an object without props which value is null or undefined', () => {
    const obj = {
      a: 0,
      b: false,
      c: null,
      d: undefined,
    };

    const actual = cleanObj(obj);
    expect(actual).toEqual({ a: 0, b: false });
  });
});
