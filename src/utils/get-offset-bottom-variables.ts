import { Maybe } from '../types/Maybe';
import { Offset } from '../types/Offset';

import { formatSizing } from './get-sizing-variables';
import { getVariablesBy } from './get-variables-by';

const formatOffsetBottom = (v: Maybe<Offset>): Maybe<string> =>
  Array.isArray(v) && v.length >= 3 ? formatSizing(v[2]) : undefined;

export const getOffsetBottomVariables = getVariablesBy(formatOffsetBottom);
