import { isNil } from 'ramda';

import { Maybe } from '../types/Maybe';

import { getStylesBy } from './get-styles-by';

describe('getStylesBy', () => {
  const testFn = (v: Maybe<number>) => (isNil(v) ? v : v.toString());

  it('should return a function that returns an array of classnames with modifier value gotten by given function', () => {
    const styleFn = getStylesBy(testFn);
    const actual = styleFn('x', 1);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x_1",
      ]
    `);
  });

  it('should return a function that returns an empty array if value is null or undefined', () => {
    const values = [null, undefined];
    const styleFn = getStylesBy(testFn);

    values.forEach((v) => {
      const actual = styleFn('x', v);
      expect(actual).toEqual([]);
    });
  });

  it('should return a function that returns correct array of classnames if value is responsive-value-object', () => {
    const value = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 6,
    };

    const styleFn = getStylesBy(testFn);
    const actual = styleFn('x', value);

    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x_1",
        "x-sm_2",
        "x-md_3",
        "x-lg_4",
        "x-xl_5",
        "x-xxl_6",
      ]
    `);
  });

  it('should return a function that returns correct array of classnames if value is responsive-value-object with null or undefined values', () => {
    const value = {
      xs: 1,
      sm: null,
      md: 3,
      lg: undefined,
      xl: 5,
      xxl: 6,
    };

    const styleFn = getStylesBy(testFn);
    const actual = styleFn('x', value);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x_1",
        "x-md_3",
        "x-xl_5",
        "x-xxl_6",
      ]
    `);
  });
});
