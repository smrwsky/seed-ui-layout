import { Maybe } from '../types/Maybe';
import {
  ResponsiveValue,
  ResponsiveValueObject,
} from '../types/ResponsiveValue';
import { Pair } from '../types/Pair';

import { isResponsiveValue } from './is-responsive-value';

function getValuePairs<T>(
  name: string,
  value: Maybe<T>,
): Pair<string, Maybe<T>>[] {
  return [[`${name}`, value]];
}

function getResponsiveValuePairs<T>(
  name: string,
  value: ResponsiveValueObject<T>,
): Pair<string, Maybe<T>>[] {
  return [
    [name, value.xs],
    [`${name}-sm`, value.sm],
    [`${name}-md`, value.md],
    [`${name}-lg`, value.lg],
    [`${name}-xl`, value.xl],
    [`${name}-xxl`, value.xxl],
  ];
}

export function getStylesBy<T = unknown>(
  fn: (value: Maybe<T>) => Maybe<string>,
) {
  return (name: string, value: Maybe<ResponsiveValue<T>>): string[] => {
    const pairs = isResponsiveValue(value)
      ? getResponsiveValuePairs(name, value)
      : getValuePairs(name, value);

    return pairs.reduce<string[]>((acc, [key, val]) => {
      const mod = fn(val);

      return typeof mod === 'string'
        ? [...acc, mod ? `${key}_${mod}` : key]
        : acc;
    }, []);
  };
}
