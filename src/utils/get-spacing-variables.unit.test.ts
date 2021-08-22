import { ResponsiveValue } from '../types/ResponsiveValue';
import { Spacing } from '../types/Spacing';

import { getSpacingVariables } from './get-spacing-variables';

describe('getSpacingVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getSpacingVariables('--spacing', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is string', () => {
    const value = 'auto';
    const actual = getSpacingVariables('spacing', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--spacing": "auto",
}
`);
  });

  it('should return correct variables if value number', () => {
    const value = 2;
    const actual = getSpacingVariables('spacing', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--spacing": "16px",
}
`);
  });

  it('should return correct variables if value is array of numbers or strings', () => {
    const value: Spacing = [2, 'auto'];
    const actual = getSpacingVariables('spacing', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--spacing": "16px auto",
}
`);
  });

  it('should return correct variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<Spacing> = {
      xs: '2px',
      sm: 1,
      md: 2,
      lg: [0, 1],
      xl: [0, 1, 2],
      xxl: [0, 1, 2, 3],
    };

    const actual = getSpacingVariables('spacing', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--spacing": "2px",
        "--spacing-lg": "0px 8px",
        "--spacing-md": "16px",
        "--spacing-sm": "8px",
        "--spacing-xl": "0px 8px 16px",
        "--spacing-xxl": "0px 8px 16px 24px",
      }
    `);
  });

  it('should return correct variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<Spacing> = {
      xs: '2px',
      sm: 1,
      md: null,
      lg: [0, 1],
      xl: [0, 1, 2],
      xxl: undefined,
    };

    const actual = getSpacingVariables('spacing', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--spacing": "2px",
        "--spacing-lg": "0px 8px",
        "--spacing-sm": "8px",
        "--spacing-xl": "0px 8px 16px",
      }
    `);
  });
});
