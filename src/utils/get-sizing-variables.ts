import { Maybe } from '../types/Maybe';
import { Sizing } from '../types/Sizing';

import { getVariablesBy } from './get-variables-by';

export function formatSizing(v: Maybe<Sizing>): Maybe<string> {
  return (
    (typeof v === 'number' &&
      Math.abs(v) > 0 &&
      Math.abs(v) <= 1 &&
      `${v * 100}%`) ||
    (typeof v === 'number' && `${v}px`) ||
    (v as Maybe<string>)
  );
}

export const getSizingVariables = getVariablesBy(formatSizing);
