import { Maybe } from '../types/Maybe';
import { Sizing } from '../types/Sizing';

import { formatSizing } from './get-sizing-variables';
import { getVariablesBy } from './get-variables-by';

export type BackgroundXPosition = 'left' | 'center' | 'right' | Sizing;

export type BackgroundYPosition = 'top' | 'center' | 'bottom' | Sizing;

export type BackgroundPosition =
  | BackgroundXPosition
  | BackgroundYPosition
  | [BackgroundXPosition, BackgroundYPosition];

const formatBgPos = (s: Maybe<BackgroundPosition>): Maybe<string> =>
  Array.isArray(s) ? s.map((v) => formatSizing(v)).join(' ') : formatSizing(s);

export const getBgPosVariables = getVariablesBy(formatBgPos);
