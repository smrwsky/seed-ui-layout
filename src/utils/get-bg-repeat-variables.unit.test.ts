import { ResponsiveValue } from '../types/ResponsiveValue';

import {
  BackgroundRepeat,
  getBgRepeatVariables,
} from './get-bg-repeat-variables';

describe('getBgRepeatVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgRepeatVariables('bg-repeat', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is string', () => {
    const value = 'no-repeat';
    const actual = getBgRepeatVariables('bg-repeat', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-repeat": "no-repeat",
      }
    `);
  });

  it('should return correct variables if value is array of strings', () => {
    const value: BackgroundRepeat = ['space', 'no-repeat'];
    const actual = getBgRepeatVariables('bg-repeat', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-repeat": "space no-repeat",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<BackgroundRepeat> = {
      xs: 'no-repeat',
      sm: 'repeat',
      md: 'repeat-x',
      lg: 'repeat-y',
      xl: 'round',
      xxl: ['space', 'no-repeat'],
    };

    const actual = getBgRepeatVariables('bg-repeat', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-repeat": "no-repeat",
        "--bg-repeat-lg": "repeat-y",
        "--bg-repeat-md": "repeat-x",
        "--bg-repeat-sm": "repeat",
        "--bg-repeat-xl": "round",
        "--bg-repeat-xxl": "space no-repeat",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<BackgroundRepeat> = {
      xs: 'no-repeat',
      sm: 'repeat',
      md: undefined,
      lg: 'repeat-y',
      xl: null,
      xxl: ['space', 'no-repeat'],
    };

    const actual = getBgRepeatVariables('bg-repeat', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-repeat": "no-repeat",
        "--bg-repeat-lg": "repeat-y",
        "--bg-repeat-sm": "repeat",
        "--bg-repeat-xxl": "space no-repeat",
      }
    `);
  });
});
