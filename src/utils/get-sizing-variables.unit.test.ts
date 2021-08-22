import { ResponsiveValue } from '../types/ResponsiveValue';
import { Sizing } from '../types/Sizing';

import { getSizingVariables } from './get-sizing-variables';

describe('getSizingVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getSizingVariables('--sizing', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is string', () => {
    const value = 'auto';
    const actual = getSizingVariables('sizing', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--sizing": "auto",
}
`);
  });

  it('should return correct variables if value is number greater then 1', () => {
    const value = 500;
    const actual = getSizingVariables('sizing', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--sizing": "500px",
}
`);
  });

  it('should return correct variables if value is number less or equal 1', () => {
    const value = 0.75;
    const actual = getSizingVariables('sizing', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--sizing": "75%",
}
`);
  });

  it('should return correct variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<Sizing> = {
      xs: 'auto',
      sm: 0.75,
      md: 500,
      lg: 625,
      xl: 750,
      xxl: 875,
    };

    const actual = getSizingVariables('sizing', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--sizing": "auto",
        "--sizing-lg": "625px",
        "--sizing-md": "500px",
        "--sizing-sm": "75%",
        "--sizing-xl": "750px",
        "--sizing-xxl": "875px",
      }
    `);
  });

  it('should return correct variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<Sizing> = {
      xs: 'auto',
      sm: null,
      md: 500,
      lg: 625,
      xl: undefined,
      xxl: 875,
    };

    const actual = getSizingVariables('sizing', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--sizing": "auto",
        "--sizing-lg": "625px",
        "--sizing-md": "500px",
        "--sizing-xxl": "875px",
      }
    `);
  });
});
