import React from 'react';
import cx from 'classnames';

import { ResponsiveValue } from '../../types/ResponsiveValue';
import { Align } from '../../types/Align';
import { Justify } from '../../types/Justify';
import { getStringStyles } from '../../utils/get-string-styles';
import { getBooleanStyles } from '../../utils/get-boolean-styles';

import { RowGutter } from './types/RowGutter';
import { getRowGutterYVariables } from './_get-row-gutter-y-variables';
import { getRowGutterXVariables } from './_get-row-gutter-x-variables';

export interface RowProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: React.ElementType;
  align?: ResponsiveValue<Align>;
  justify?: ResponsiveValue<Justify>;
  gutter?: ResponsiveValue<RowGutter>;
}

function Row(
  {
    as: As = 'div',
    align,
    gutter,
    justify,
    className,
    style,
    children,
    ...elementProps
  }: RowProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elementProps}
      ref={ref}
      className={cx(
        'seed-row',
        getBooleanStyles('seed-row_gutter', gutter),
        getStringStyles('_seed-align', align),
        getStringStyles('_seed-justify', justify),
      )}
      style={{
        ...getRowGutterYVariables('seed-row-gutter-y', gutter),
        ...getRowGutterXVariables('seed-row-gutter-x', gutter),
        ...style,
      }}
    >
      {children}
    </As>
  );
}

Row.displayName = 'Row';

export default React.forwardRef(Row);
