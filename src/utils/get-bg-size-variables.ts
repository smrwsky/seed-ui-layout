import { Maybe } from '../types/Maybe';
import { Pair } from '../types/Pair';
import { Sizing } from '../types/Sizing';

import { formatSizing } from './get-sizing-variables';
import { getVariablesBy } from './get-variables-by';

export type BackgroundSize = 'cover' | 'contain' | Pair<Sizing>;

const formatBgSize = (s: Maybe<BackgroundSize>): Maybe<string> =>
  Array.isArray(s) ? s.map((v) => formatSizing(v)).join(' ') : s;

export const getBgSizeVariables = getVariablesBy(formatBgSize);
