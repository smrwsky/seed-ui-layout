import React from 'react';
import cx from 'classnames';

import { ResponsiveValue } from '../../types/ResponsiveValue';
import { getSizingVariables } from '../../utils/get-sizing-variables';
import { getOffsetRightVariables } from '../../utils/get-offset-right-variables';
import { Position } from '../../types/Position';
import { getStringStyles } from '../../utils/get-string-styles';
import { getBooleanStyles } from '../../utils/get-boolean-styles';
import { Offset } from '../../types/Offset';
import { getOffsetBottomVariables } from '../../utils/get-offset-bottom-variables';
import { getOffsetLeftVariables } from '../../utils/get-offset-left-variables';
import { getOffsetTopVariables } from '../../utils/get-offset-top-variables';
import { Sizing } from '../../types/Sizing';

export interface BarProps
  extends Omit<
    React.AllHTMLAttributes<HTMLElement>,
    'as' | 'height' | 'width'
  > {
  as?: React.ElementType;
  height?: ResponsiveValue<Sizing>;
  maxHeight?: ResponsiveValue<Sizing>;
  maxWidth?: ResponsiveValue<Sizing>;
  minHeight?: ResponsiveValue<Sizing>;
  minWidth?: ResponsiveValue<Sizing>;
  offset?: ResponsiveValue<Offset>;
  position?: ResponsiveValue<Position>;
  width?: ResponsiveValue<Sizing>;
}

function Bar(
  {
    as: As = 'div',
    className,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    offset,
    position,
    style,
    width,
    children,
    ...elemProps
  }: BarProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      ref={ref}
      className={cx(
        getBooleanStyles('_seed-h', height),
        getBooleanStyles('_seed-max-h', maxHeight),
        getBooleanStyles('_seed-max-w', maxWidth),
        getBooleanStyles('_seed-min-h', minHeight),
        getBooleanStyles('_seed-min-w', minWidth),
        getBooleanStyles('_seed-offset', offset),
        getStringStyles('_seed-pos', position),
        getBooleanStyles('_seed-w', width),
        className,
      )}
      style={{
        ...getSizingVariables('seed-h', height),
        ...getSizingVariables('seed-max-h', maxHeight),
        ...getSizingVariables('seed-max-w', maxWidth),
        ...getSizingVariables('seed-min-h', minHeight),
        ...getSizingVariables('seed-min-w', minWidth),
        ...getOffsetBottomVariables('seed-offset-bottom', offset),
        ...getOffsetLeftVariables('seed-offset-left', offset),
        ...getOffsetRightVariables('seed-offset-right', offset),
        ...getOffsetTopVariables('seed-offset-top', offset),
        ...getSizingVariables('seed-w', width),
        ...style,
      }}
    >
      {children}
    </As>
  );
}

Bar.displayName = 'Bar';

export default React.forwardRef(Bar);
