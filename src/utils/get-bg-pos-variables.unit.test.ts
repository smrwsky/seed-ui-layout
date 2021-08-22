import { ResponsiveValue } from '../types/ResponsiveValue';

import { BackgroundPosition, getBgPosVariables } from './get-bg-pos-variables';

describe('getBgPosVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgPosVariables('bg-pos', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is string', () => {
    const value = 'top';
    const actual = getBgPosVariables('bg-pos', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-pos": "top",
      }
    `);
  });

  it('should return correct variables if value is array of numbers or strings', () => {
    const value: BackgroundPosition = [24, 'left'];
    const actual = getBgPosVariables('bg-pos', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-pos": "24px left",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<BackgroundPosition> = {
      xs: 'top',
      sm: ['top', 'left'],
      md: [16, 24],
      lg: [1, 0.5],
      xl: [24, 'left'],
      xxl: ['bottom', 0.25],
    };

    const actual = getBgPosVariables('bg-pos', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-pos": "top",
        "--bg-pos-lg": "100% 50%",
        "--bg-pos-md": "16px 24px",
        "--bg-pos-sm": "top left",
        "--bg-pos-xl": "24px left",
        "--bg-pos-xxl": "bottom 25%",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<BackgroundPosition> = {
      xs: 'top',
      sm: null,
      md: [16, 24],
      lg: undefined,
      xl: [24, 'left'],
      xxl: ['bottom', 0.25],
    };

    const actual = getBgPosVariables('bg-pos', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-pos": "top",
        "--bg-pos-md": "16px 24px",
        "--bg-pos-xl": "24px left",
        "--bg-pos-xxl": "bottom 25%",
      }
    `);
  });
});
