import { Dictionary } from 'ramda';

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
  return [[`--${name}`, value]];
}

function getResponsiveValuePairs<T>(
  name: string,
  value: ResponsiveValueObject<T>,
): Pair<string, Maybe<T>>[] {
  return [
    [`--${name}`, value.xs],
    [`--${name}-sm`, value.sm],
    [`--${name}-md`, value.md],
    [`--${name}-lg`, value.lg],
    [`--${name}-xl`, value.xl],
    [`--${name}-xxl`, value.xxl],
  ];
}

export function getVariablesBy<T = unknown>(
  fn: (value: Maybe<T>) => Maybe<string>,
) {
  return (
    name: string,
    value: Maybe<ResponsiveValue<T>>,
  ): Dictionary<Maybe<string>> => {
    const pairs = isResponsiveValue(value)
      ? getResponsiveValuePairs(name, value)
      : getValuePairs(name, value);

    return pairs.reduce<Dictionary<string>>((acc, [key, val]) => {
      const str = fn(val);
      return typeof str === 'string' ? { ...acc, [key]: str } : acc;
    }, {});
  };
}
