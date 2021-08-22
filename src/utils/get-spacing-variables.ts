import { Maybe } from '../types/Maybe';
import { Sizing } from '../types/Sizing';
import { Spacing } from '../types/Spacing';

import { getVariablesBy } from './get-variables-by';

export const SPACING_BASE = 8;

function formatValue(value: Maybe<Sizing>): Maybe<string> {
  return typeof value === 'number' ? `${SPACING_BASE * value}px` : value;
}

function formatArray(value: Exclude<Spacing, Sizing>): string {
  return value.map((v) => formatValue(v)).join(' ');
}

export function formatSpacing(value: Maybe<Spacing>): Maybe<string> {
  return Array.isArray(value) ? formatArray(value) : formatValue(value);
}

export const getSpacingVariables = getVariablesBy(formatSpacing);
