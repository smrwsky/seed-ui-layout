import { getBooleanStyles } from './get-boolean-styles';

describe('getBooleanStyles', () => {
  it('should return correct class-names if value is not null and not undefined', () => {
    const value = 0;
    const actual = getBooleanStyles('x', value);
    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x",
      ]
    `);
  });

  it('should return no class-names if value is false', () => {
    const actual = getBooleanStyles('x', false);
    expect(actual).toEqual([]);
  });

  it('should return no class-names if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBooleanStyles('x', v);
      expect(actual).toEqual([]);
    });
  });

  it('should return correct variables if value is responsive-value-object', () => {
    const value = {
      xs: 0,
      sm: 999999999,
      md: 'auto',
      lg: true,
      xl: 'x',
      xxl: '/image-xxl.jpg',
    };

    const actual = getBooleanStyles('x', value);

    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x",
        "x-sm",
        "x-md",
        "x-lg",
        "x-xl",
        "x-xxl",
      ]
    `);
  });

  it('should return no variables if value is responsive-value-object with false values', () => {
    const value = {
      xs: 0,
      sm: 999999999,
      md: 'auto',
      lg: false,
      xl: 'x',
      xxl: '/image-xxl.jpg',
    };

    const actual = getBooleanStyles('x', value);

    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x",
        "x-sm",
        "x-md",
        "x-xl",
        "x-xxl",
      ]
    `);
  });

  it('should return no variables if value is responsive-value-object with null or undefined values', () => {
    const value = {
      xs: null,
      sm: 999999999,
      md: 'auto',
      lg: undefined,
      xl: 'x',
      xxl: '/image-xxl.jpg',
    };

    const actual = getBooleanStyles('x', value);

    expect(actual).toMatchInlineSnapshot(`
      Array [
        "x-sm",
        "x-md",
        "x-xl",
        "x-xxl",
      ]
    `);
  });
});
