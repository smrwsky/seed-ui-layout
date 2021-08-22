import { Offset } from '../types/Offset';
import { ResponsiveValue } from '../types/ResponsiveValue';

import { getOffsetBottomVariables } from './get-offset-bottom-variables';
import { getBgSizeVariables } from './get-bg-size-variables';

describe('getOffsetBottomVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgSizeVariables('--offset-bottom', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is array of less then 3 items', () => {
    const value: Offset = [250, 375];
    const actual = getOffsetBottomVariables('--offset-bottom', value);
    expect(actual).toEqual({});
  });

  it('should return correct variables if value is array of 3 or more items', () => {
    const value: Offset = [250, 375, 500, 625];
    const actual = getOffsetBottomVariables('offset-bottom', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--offset-bottom": "500px",
      }
    `);
  });

  it('should return correct variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<Offset> = {
      xs: 'auto',
      sm: 0.25,
      md: 250,
      lg: [250, 375],
      xl: [250, 375, 500],
      xxl: [250, 375, 500, 625],
    };

    const actual = getOffsetBottomVariables('offset-bottom', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--offset-bottom-xl": "500px",
        "--offset-bottom-xxl": "500px",
      }
    `);
  });

  it('should return correct variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<Offset> = {
      xs: 'auto',
      sm: null,
      md: 250,
      lg: [250, 375],
      xl: [250, 375, 500],
      xxl: undefined,
    };

    const actual = getOffsetBottomVariables('offset-bottom', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-bottom-xl": "500px",
}
`);
  });
});
