import { Offset } from '../types/Offset';
import { ResponsiveValue } from '../types/ResponsiveValue';

import { getOffsetLeftVariables } from './get-offset-left-variables';
import { getBgSizeVariables } from './get-bg-size-variables';

describe('getOffsetLeftVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgSizeVariables('--offset-left', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is array of less then 4 items', () => {
    const value: Offset = [250, 375, 500];
    const actual = getOffsetLeftVariables('offset-left', value);
    expect(actual).toEqual({});
  });

  it('should return correct variables if value is array of 4', () => {
    const value: Offset = [250, 375, 500, 625];
    const actual = getOffsetLeftVariables('offset-left', value);
    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--offset-left": "625px",
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

    const actual = getOffsetLeftVariables('offset-left', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-left-xxl": "625px",
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

    const actual = getOffsetLeftVariables('offset-left', value);
    expect(actual).toMatchInlineSnapshot(`Object {}`);
  });
});
