import { ResponsiveValue } from '../types/ResponsiveValue';

import { getOrderVariables } from './get-order-variables';
import { getBgSizeVariables } from './get-bg-size-variables';

describe('getOrderVariables', () => {
  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgSizeVariables('--order', v);
      expect(actual).toEqual({});
    });
  });

  it('should return correct variables if value is number', () => {
    const value = 3;
    const actual = getOrderVariables('order', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--order": "3",
}
`);
  });

  it('should return correct variables if value is responsive-value-object', () => {
    const value: ResponsiveValue<number> = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 6,
    };

    const actual = getOrderVariables('order', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--order": "1",
  "--order-lg": "4",
  "--order-md": "3",
  "--order-sm": "2",
  "--order-xl": "5",
  "--order-xxl": "6",
}
`);
  });

  it('should return correct variables if value is responsive-value-object with null or undefined values', () => {
    const value: ResponsiveValue<number> = {
      xs: 1,
      sm: null,
      md: 3,
      lg: 4,
      xl: undefined,
      xxl: 6,
    };

    const actual = getOrderVariables('order', value);
    expect(actual).toMatchInlineSnapshot(`
Object {
  "--order": "1",
  "--order-lg": "4",
  "--order-md": "3",
  "--order-xxl": "6",
}
`);
  });
});
