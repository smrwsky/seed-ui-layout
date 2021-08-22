import { Maybe } from '../../types/Maybe';
import { getStylesBy } from '../../utils/get-styles-by';

import { ColSpan } from './types/ColSpan';

function getColSpan(value: Maybe<ColSpan>): Maybe<string> {
  return (
    (value === true && 'fill') ||
    ((value === false || value === 0) && 'none') ||
    (typeof value === 'number' && value.toString()) ||
    null
  );
}

export const getColSpanStyles = getStylesBy(getColSpan);
