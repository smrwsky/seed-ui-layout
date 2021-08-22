import { getBgImageVariables } from './get-bg-image-variables';

describe('getBgImageVariables', () => {
  it('should return correct variables if value is string', () => {
    const value = '/image.jpg';
    const actual = getBgImageVariables('bg-image', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-image": "/image.jpg",
      }
    `);
  });

  it('should return no variables if value is null or undefined', () => {
    const values = [null, undefined];

    values.forEach((v) => {
      const actual = getBgImageVariables('bg-image', v);
      expect(actual).toEqual({});
    });
  });

  it('should return no variables if value is responsive-value-object', () => {
    const value = {
      xs: '/image.jpg',
      sm: '/image-sm.jpg',
      md: '/image-md.jpg',
      lg: '/image-lg.jpg',
      xl: '/image-xl.jpg',
      xxl: '/image-xxl.jpg',
    };

    const actual = getBgImageVariables('bg-image', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-image": "/image.jpg",
        "--bg-image-lg": "/image-lg.jpg",
        "--bg-image-md": "/image-md.jpg",
        "--bg-image-sm": "/image-sm.jpg",
        "--bg-image-xl": "/image-xl.jpg",
        "--bg-image-xxl": "/image-xxl.jpg",
      }
    `);
  });

  it('should return no variables if value is responsive-value-object with null or undefined values', () => {
    const value = {
      xs: '/image.jpg',
      sm: '/image-sm.jpg',
      md: '/image-md.jpg',
      lg: null,
      xl: undefined,
      xxl: '/image-xxl.jpg',
    };

    const actual = getBgImageVariables('bg-image', value);

    expect(actual).toMatchInlineSnapshot(`
      Object {
        "--bg-image": "/image.jpg",
        "--bg-image-md": "/image-md.jpg",
        "--bg-image-sm": "/image-sm.jpg",
        "--bg-image-xxl": "/image-xxl.jpg",
      }
    `);
  });
});
