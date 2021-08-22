import { Maybe } from '../types/Maybe';

import { getStylesBy } from './get-styles-by';

const formatBoolean = (v: Maybe<unknown>) => (v || v === 0 ? '' : null);

export const getBooleanStyles = getStylesBy(formatBoolean);
