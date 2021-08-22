import { isNil } from 'ramda';

import { Maybe } from '../types/Maybe';

import { getVariablesBy } from './get-variables-by';

function formatOrder(v: Maybe<number>) {
  return isNil(v) ? v : v.toString();
}

export const getOrderVariables = getVariablesBy<Maybe<number>>(formatOrder);
