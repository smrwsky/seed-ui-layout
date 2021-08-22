import { isResponsiveValue } from './is-responsive-value';

describe('isResponsiveValue', () => {
  it('should return false if value is null', () => {
    const actual = isResponsiveValue(null);
    expect(actual).toBe(false);
  });

  it('should return false if value is array', () => {
    const actual = isResponsiveValue([]);
    expect(actual).toBe(false);
  });

  it('should return true if value is object which is not an array and not null', () => {
    const actual = isResponsiveValue({});
    expect(actual).toBe(true);
  });
});
