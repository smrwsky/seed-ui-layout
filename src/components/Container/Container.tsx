import React from 'react';
import cx from 'classnames';

import { ResponsiveValue } from '../../types/ResponsiveValue';
import { getSpacingVariables } from '../../utils/get-spacing-variables';
import { getSizingVariables } from '../../utils/get-sizing-variables';
import { getBooleanStyles } from '../../utils/get-boolean-styles';
import { Sizing } from '../../types/Sizing';
import { Spacing } from '../../types/Spacing';

export interface ContainerProps
  extends Omit<
    React.AllHTMLAttributes<HTMLElement>,
    'as' | 'height' | 'width'
  > {
  as?: React.ElementType;
  height?: ResponsiveValue<Sizing>;
  margin?: ResponsiveValue<Spacing>;
  maxHeight?: ResponsiveValue<Sizing>;
  maxWidth?: ResponsiveValue<Sizing>;
  minHeight?: ResponsiveValue<Sizing>;
  minWidth?: ResponsiveValue<Sizing>;
  padding?: ResponsiveValue<Spacing>;
  width?: ResponsiveValue<Sizing>;
}

function Container(
  {
    as: As = 'div',
    height,
    margin,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    padding,
    width,
    className,
    style,
    children,
    ...elemProps
  }: ContainerProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      ref={ref}
      className={cx(
        getBooleanStyles('_seed-h', height),
        getBooleanStyles('_seed-m', margin),
        getBooleanStyles('_seed-max-h', maxHeight),
        getBooleanStyles('_seed-max-w', maxWidth),
        getBooleanStyles('_seed-min-h', minHeight),
        getBooleanStyles('_seed-min-w', minWidth),
        getBooleanStyles('_seed-p', padding),
        getBooleanStyles('_seed-w', width),
        className,
      )}
      style={{
        ...getSizingVariables('seed-h', height),
        ...getSpacingVariables('seed-m', margin),
        ...getSizingVariables('seed-max-h', maxHeight),
        ...getSizingVariables('seed-max-w', maxWidth),
        ...getSizingVariables('seed-min-h', minHeight),
        ...getSizingVariables('seed-min-w', minWidth),
        ...getSpacingVariables('seed-p', padding),
        ...getSizingVariables('seed-w', width),
        ...style,
      }}
    >
      {children}
    </As>
  );
}

Container.displayName = 'Container';

export default React.forwardRef(Container);
