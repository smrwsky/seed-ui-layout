import React from 'react';
import cx from 'classnames';
import { isNil } from 'ramda';

import { getSpacingVariables } from '../../utils/get-spacing-variables';
import { Align } from '../../types/Align';
import { Justify } from '../../types/Justify';
import { getStringStyles } from '../../utils/get-string-styles';
import { Direction } from '../../types/Direction';
import { getBooleanStyles } from '../../utils/get-boolean-styles';
import { Sizing } from '../../types/Sizing';

export interface SpaceProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: React.ElementType;
  align?: Align;
  direction?: Direction;
  gutter?: Sizing;
  justify?: Justify;
}

function Space(
  {
    as: As = 'div',
    align,
    className,
    direction,
    gutter,
    justify,
    style,
    children,
    ...elemProps
  }: SpaceProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      ref={ref}
      className={cx(
        'seed-space',
        getBooleanStyles('seed-space_gutter', gutter),
        getStringStyles('_seed-align', align),
        getStringStyles('_seed-justify', justify),
        getStringStyles('_seed-direction', direction),
        className,
      )}
      style={{
        ...getSpacingVariables('seed-space-gutter', gutter),
        style,
      }}
    >
      {React.Children.map(children, (child) =>
        isNil(child) ? child : <div className="seed-space__item">{child}</div>,
      )}
    </As>
  );
}

Space.displayName = 'Space';

export default React.forwardRef(Space);
