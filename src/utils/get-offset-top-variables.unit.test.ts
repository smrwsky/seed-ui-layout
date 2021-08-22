import { Offset } from '../types/Offset';
import { ResponsiveValue } from '../types/ResponsiveValue';

import { getOffsetTopVariables } from './get-offset-top-variables';
import { getBgSizeVariables } from './get-bg-size-variables';

describe('getOffsetTopVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgSizeVariables('--offset-top', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is not array', () => {
    const value: Offset = 250;
    const actual = getOffsetTopVariables('offset-top', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-top": "250px",
}
`);
  });

  it('should return correct variables if value is array', () => {
    const value: Offset = [250, 375, 500, 625];
    const actual = getOffsetTopVariables('offset-top', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-top": "250px",
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

    const actual = getOffsetTopVariables('offset-top', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-top": "auto",
  "--offset-top-lg": "250px",
  "--offset-top-md": "250px",
  "--offset-top-sm": "25%",
  "--offset-top-xl": "250px",
  "--offset-top-xxl": "250px",
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

    const actual = getOffsetTopVariables('offset-top', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--offset-top": "auto",
  "--offset-top-lg": "250px",
  "--offset-top-md": "250px",
  "--offset-top-xl": "250px",
}
`);
  });
});
