import { isNil } from 'ramda';

import { Maybe } from '../types/Maybe';

import { getVariablesBy } from './get-variables-by';

describe('getVariablesBy', () => {
  const testFn = (v: Maybe<number>) => (isNil(v) ? v : `${v}px`);

  it('should return a function that returns a collection of variables with values gotten by given function', () => {
    const varFn = getVariablesBy(testFn);
    const actual = varFn('x', 250);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--x": "250px",
      }
    `);
  });

  it('should return a function that returns an empty object if value is null or undefined', () => {
    const values = [null, undefined];
    const varFn = getVariablesBy(testFn);

    values.forEach((v) => {
      const actual = varFn('x', v);
      expect(actual).toEqual({});
    });
  });

  it('should return a function that returns correct collection of variables if value is responsive-value-object', () => {
    const value = {
      xs: 250,
      sm: 375,
      md: 500,
      lg: 625,
      xl: 750,
      xxl: 875,
    };

    const varFn = getVariablesBy(testFn);
    const actual = varFn('x', value);

    expect(actual).toMatchInlineSnapshot(`
Object {
  "--x": "250px",
  "--x-lg": "625px",
  "--x-md": "500px",
  "--x-sm": "375px",
  "--x-xl": "750px",
  "--x-xxl": "875px",
}
`);
  });

  it('should return a function that returns correct collection of variables if value is responsive-value-object with null or undefined values', () => {
    const value = {
      xs: null,
      sm: 375,
      md: 500,
      lg: 625,
      xl: undefined,
      xxl: 875,
    };

    const varFn = getVariablesBy(testFn);
    const actual = varFn('x', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--x-lg": "625px",
        "--x-md": "500px",
        "--x-sm": "375px",
        "--x-xxl": "875px",
      }
    `);
  });
});
