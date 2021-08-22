import { Offset } from '../types/Offset';
import { ResponsiveValue } from '../types/ResponsiveValue';

import { getOffsetRightVariables } from './get-offset-right-variables';
import { getBgSizeVariables } from './get-bg-size-variables';

describe('getOffsetRightVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgSizeVariables('--offset-right', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is not array of 2 or more items', () => {
    const value: Offset = 250;
    const actual = getOffsetRightVariables('offset-right', value);
    expect(actual).toEqual({});
  });

  it('should return correct variables if value is array of 2 or more items', () => {
    const value: Offset = [250, 375, 500, 625];
    const actual = getOffsetRightVariables('offset-right', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-right": "375px",
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

    const actual = getOffsetRightVariables('offset-right', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-right-xl": "375px",
  "--offset-right-xxl": "375px",
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

    const actual = getOffsetRightVariables('offset-right', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-right-xl": "375px",
}
`);
  });
});
