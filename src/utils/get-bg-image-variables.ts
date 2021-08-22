import { identity } from 'ramda';

import { Maybe } from '../types/Maybe';

import { getVariablesBy } from './get-variables-by';

export const getBgImageVariables = getVariablesBy<Maybe<string>>(identity);
