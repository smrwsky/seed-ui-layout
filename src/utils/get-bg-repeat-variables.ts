import { Maybe } from '../types/Maybe';
import { Pair } from '../types/Pair';

import { getVariablesBy } from './get-variables-by';

export type BackgroundRepeatValue =
  | 'no-repeat'
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'round'
  | 'space';

export type BackgroundRepeat =
  | BackgroundRepeatValue
  | Pair<Omit<BackgroundRepeatValue, 'repeat-x' | 'repeat-y'>>;

const formatBgRepeat = (v: Maybe<BackgroundRepeat>): Maybe<string> =>
  Array.isArray(v) ? v.join(' ') : v;

export const getBgRepeatVariables = getVariablesBy(formatBgRepeat);
