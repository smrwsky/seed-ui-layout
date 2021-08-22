import { Maybe } from '../types/Maybe';
import { Offset } from '../types/Offset';

import { formatSizing } from './get-sizing-variables';
import { getVariablesBy } from './get-variables-by';

const formatOffsetRight = (v: Maybe<Offset>): Maybe<string> =>
  Array.isArray(v) && v.length > 2 ? formatSizing(v[1]) : undefined;

export const getOffsetRightVariables = getVariablesBy(formatOffsetRight);
