import { Maybe } from '../types/Maybe';
import { Offset } from '../types/Offset';

import { formatSizing } from './get-sizing-variables';
import { getVariablesBy } from './get-variables-by';

const formatOffsetLeft = (v: Maybe<Offset>): Maybe<string> =>
  (Array.isArray(v) && v.length === 4 && formatSizing(v[3])) || undefined;

export const getOffsetLeftVariables = getVariablesBy(formatOffsetLeft);
