import React from 'react';
import cx from 'classnames';

import { ResponsiveValue } from '../../types/ResponsiveValue';
import { Align } from '../../types/Align';
import { getStringStyles } from '../../utils/get-string-styles';
import { getOrderVariables } from '../../utils/get-order-variables';
import { getBooleanStyles } from '../../utils/get-boolean-styles';

import { getColSpanStyles } from './_get-col-span-styles';
import { ColSpan } from './types/ColSpan';

export interface ColProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: React.ElementType;
  xs?: ColSpan;
  sm?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  xl?: ColSpan;
  xxl?: ColSpan;
  order?: ResponsiveValue<number>;
  align?: ResponsiveValue<Align>;
}

function Col(
  {
    as: As = 'div',
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    align,
    order,
    className,
    style,
    children,
    ...elementProps
  }: ColProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elementProps}
      ref={ref}
      className={cx(
        'seed-col',
        getColSpanStyles('seed-col_xs', xs),
        getColSpanStyles('seed-col_sm', sm),
        getColSpanStyles('seed-col_md', md),
        getColSpanStyles('seed-col_lg', lg),
        getColSpanStyles('seed-col_xl', xl),
        getColSpanStyles('seed-col_xxl', xxl),
        getStringStyles('_seed-align-self', align),
        getBooleanStyles('_seed-order', order),
        className,
      )}
      style={{
        ...getOrderVariables('seed-order', order),
        ...style,
      }}
    >
      {children}
    </As>
  );
}

export default React.forwardRef(Col);
