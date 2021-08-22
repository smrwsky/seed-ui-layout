import React from 'react';
import cx from 'classnames';

import { getBooleanStyles } from '../../utils/get-boolean-styles';

export interface HiddenProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, 'as'> {
  as?: React.ElementType;
  xsDown?: boolean;
  sm?: boolean;
  smDown?: boolean;
  smUp?: boolean;
  md?: boolean;
  mdDown?: boolean;
  mdUp?: boolean;
  lg?: boolean;
  lgDown?: boolean;
  lgUp?: boolean;
  xl?: boolean;
  xlUp?: boolean;
  xlDown?: boolean;
  xxlUp?: boolean;
}

function Hidden(
  {
    as: As = 'div',
    xsDown = false,
    sm = false,
    smDown = false,
    smUp = false,
    md = false,
    mdDown = false,
    mdUp = false,
    lg = false,
    lgDown = false,
    lgUp = false,
    xl = false,
    xlDown = false,
    xlUp = false,
    xxlUp = false,
    className,
    children,
  }: HiddenProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      ref={ref}
      className={cx(
        'seed-hidden',
        getBooleanStyles('seed-hidden_xs-down', xsDown),
        getBooleanStyles('seed-hidden_sm', sm),
        getBooleanStyles('seed-hidden_sm-down', smDown),
        getBooleanStyles('seed-hidden_sm-up', smUp),
        getBooleanStyles('seed-hidden_md', md),
        getBooleanStyles('seed-hidden_md-down', mdDown),
        getBooleanStyles('seed-hidden_md-up', mdUp),
        getBooleanStyles('seed-hidden_lg', lg),
        getBooleanStyles('seed-hidden_lg-down', lgDown),
        getBooleanStyles('seed-hidden_lg-up', lgUp),
        getBooleanStyles('seed-hidden_xl', xl),
        getBooleanStyles('seed-hidden_xl-down', xlDown),
        getBooleanStyles('seed-hidden_xl-up', xlUp),
        getBooleanStyles('seed-hidden_xxl-up', xxlUp),
        className,
      )}
    >
      {children}
    </As>
  );
}

Hidden.displayName = 'Hidden';

export default React.forwardRef(Hidden);
