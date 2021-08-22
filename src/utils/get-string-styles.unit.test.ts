import { getStringStyles } from './get-string-styles';

describe('getStringStyles', () => {
  it('should return correct class-names if value is not null and not undefined', () => {
    const value = 'a';
    const actual = getStringStyles('x', value);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x_a",
      ]
    `);
  });

  it('should return no class-names if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getStringStyles('x', v);
      expect(actual).toEqual([]);
    });
  });

  it('should return correct variables if value is responsive-value-object', () => {
    const value = {
      xs: 'a',
      sm: 'b',
      md: 'c',
      lg: 'd',
      xl: 'e',
      xxl: 'f',
    };

    const actual = getStringStyles('x', value);

    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x_a",
        "x-sm_b",
        "x-md_c",
        "x-lg_d",
        "x-xl_e",
        "x-xxl_f",
      ]
    `);
  });

  it('should return no variables if value is responsive-value-object with null or undefined values', () => {
    const value = {
      xs: 'a',
      sm: 'b',
      md: null,
      lg: 'd',
      xl: undefined,
      xxl: 'f',
    };

    const actual = getStringStyles('x', value);

    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x_a",
        "x-sm_b",
        "x-lg_d",
        "x-xxl_f",
      ]
    `);
  });
});
