import React from 'react';
import cx from 'classnames';

import { ResponsiveValue } from '../../types/ResponsiveValue';
import { getSizingVariables } from '../../utils/get-sizing-variables';
import { Position } from '../../types/Position';
import { getStringStyles } from '../../utils/get-string-styles';
import { getBooleanStyles } from '../../utils/get-boolean-styles';
import { Sizing } from '../../types/Sizing';

export interface BarProps
  extends Omit<
    React.AllHTMLAttributes<HTMLElement>,
    'as' | 'height' | 'width'
  > {
  as?: React.ElementType;
  bottom?: ResponsiveValue<Sizing>;
  height?: ResponsiveValue<Sizing>;
  left?: ResponsiveValue<Sizing>;
  maxHeight?: ResponsiveValue<Sizing>;
  maxWidth?: ResponsiveValue<Sizing>;
  minHeight?: ResponsiveValue<Sizing>;
  minWidth?: ResponsiveValue<Sizing>;
  position?: ResponsiveValue<Position>;
  right?: ResponsiveValue<Sizing>;
  top?: ResponsiveValue<Sizing>;
  width?: ResponsiveValue<Sizing>;
}

function Bar(
  {
    as: As = 'div',
    bottom,
    height,
    left,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    position,
    right,
    top,
    width,
    className,
    style,
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
        getBooleanStyles('_seed-bottom', bottom),
        getBooleanStyles('_seed-h', height),
        getBooleanStyles('_seed-left', left),
        getBooleanStyles('_seed-max-h', maxHeight),
        getBooleanStyles('_seed-max-w', maxWidth),
        getBooleanStyles('_seed-min-h', minHeight),
        getBooleanStyles('_seed-min-w', minWidth),
        getStringStyles('_seed-pos', position),
        getBooleanStyles('_seed-right', right),
        getBooleanStyles('_seed-top', top),
        getBooleanStyles('_seed-w', width),
        className,
      )}
      style={{
        ...getSizingVariables('seed-bottom', bottom),
        ...getSizingVariables('seed-h', height),
        ...getSizingVariables('seed-left', left),
        ...getSizingVariables('seed-max-h', maxHeight),
        ...getSizingVariables('seed-max-w', maxWidth),
        ...getSizingVariables('seed-min-h', minHeight),
        ...getSizingVariables('seed-min-w', minWidth),
        ...getSizingVariables('seed-right', right),
        ...getSizingVariables('seed-top', top),
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
