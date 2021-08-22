import { Maybe } from '../types/Maybe';
import { Offset } from '../types/Offset';

import { formatSizing } from './get-sizing-variables';
import { getVariablesBy } from './get-variables-by';

const formatOffsetTop = (v: Maybe<Offset>): Maybe<string> =>
  Array.isArray(v) ? formatSizing(v[0]) : formatSizing(v);

export const getOffsetTopVariables = getVariablesBy(formatOffsetTop);
