import { ResponsiveValue } from '../types/ResponsiveValue';

import { BackgroundSize, getBgSizeVariables } from './get-bg-size-variables';
import { getSpacingVariables } from './get-spacing-variables';

describe('getBgSizeVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgSizeVariables('bg-size', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is string', () => {
    const value = 'cover';
    const actual = getBgSizeVariables('bg-size', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-size": "cover",
      }
    `);
  });

  it('should return correct variables if value is array of numbers or strings', () => {
    const value: BackgroundSize = [0.75, 'auto'];
    const actual = getSpacingVariables('bg-size', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-size": "6px auto",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<BackgroundSize> = {
      xs: 'cover',
      sm: 'contain',
      md: [250, 375],
      lg: [250, 0.375],
      xl: [0.25, 375],
      xxl: [250, '75vh'],
    };

    const actual = getBgSizeVariables('bg-size', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-size": "cover",
        "--bg-size-lg": "250px 37.5%",
        "--bg-size-md": "250px 375px",
        "--bg-size-sm": "contain",
        "--bg-size-xl": "25% 375px",
        "--bg-size-xxl": "250px 75vh",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<BackgroundSize> = {
      xs: 'cover',
      sm: 'contain',
      md: null,
      lg: undefined,
      xl: [0.25, 375],
      xxl: [250, '75vh'],
    };

    const actual = getBgSizeVariables('bg-size', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-size": "cover",
        "--bg-size-sm": "contain",
        "--bg-size-xl": "25% 375px",
        "--bg-size-xxl": "250px 75vh",
      }
    `);
  });
});
