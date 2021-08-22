import { Maybe } from './Maybe';

export type ResponsiveValueObject<T = unknown> = {
  xs?: Maybe<T>;
  sm?: Maybe<T>;
  md?: Maybe<T>;
  lg?: Maybe<T>;
  xl?: Maybe<T>;
  xxl?: Maybe<T>;
};

export type ResponsiveValue<T = unknown> = T | ResponsiveValueObject<T>;
