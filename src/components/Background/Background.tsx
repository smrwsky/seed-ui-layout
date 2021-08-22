import React from 'react';
import cx from 'classnames';

import { ResponsiveValue } from '../../types/ResponsiveValue';
import {
  BackgroundPosition,
  getBgPosVariables,
} from '../../utils/get-bg-pos-variables';
import {
  BackgroundRepeat,
  getBgRepeatVariables,
} from '../../utils/get-bg-repeat-variables';
import {
  BackgroundSize,
  getBgSizeVariables,
} from '../../utils/get-bg-size-variables';
import { getBgImageVariables } from '../../utils/get-bg-image-variables';
import { getBooleanStyles } from '../../utils/get-boolean-styles';

export interface BackgroundProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: React.ElementType;
  backgroundImage?: ResponsiveValue<string>;
  backgroundPosition?: ResponsiveValue<BackgroundPosition>;
  backgroundRepeat?: ResponsiveValue<BackgroundRepeat>;
  backgroundSize?: ResponsiveValue<BackgroundSize>;
  children?: React.ReactNode;
}

function Background(
  {
    as: As = 'div',
    backgroundImage,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
    children,
    style,
    className,
    ...elementProps
  }: BackgroundProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  return (
    <As
      ref={ref}
      className={cx(
        getBooleanStyles('_seed-bg-image', backgroundImage),
        getBooleanStyles('_seed-bg-pos', backgroundPosition),
        getBooleanStyles('_seed-bg-repeat', backgroundRepeat),
        getBooleanStyles('_seed-bg-size', backgroundSize),
        className,
      )}
      style={{
        ...getBgImageVariables('seed-bg-image', backgroundImage),
        ...getBgPosVariables('seed-bg-pos', backgroundPosition),
        ...getBgRepeatVariables('seed-bg-repeat', backgroundRepeat),
        ...getBgSizeVariables('seed-bg-size', backgroundSize),
        ...style,
      }}
      {...elementProps}
    >
      {children}
    </As>
  );
}

Background.displayName = 'Background';

export default React.forwardRef(Background);
