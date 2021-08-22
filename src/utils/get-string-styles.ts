import { identity } from 'ramda';

import { getStylesBy } from './get-styles-by';

export const getStringStyles = getStylesBy<string>(identity);
