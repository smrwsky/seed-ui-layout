import { Maybe } from '../../types/Maybe';
import { formatSpacing } from '../../utils/get-spacing-variables';
import { getVariablesBy } from '../../utils/get-variables-by';

import { RowGutter } from './types/RowGutter';

function formatRowGutterY(v: Maybe<RowGutter>): Maybe<string> {
  return Array.isArray(v) ? formatSpacing(v[0]) : formatSpacing(v);
}

export const getRowGutterYVariables = getVariablesBy(formatRowGutterY);
