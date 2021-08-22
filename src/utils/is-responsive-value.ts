import {
  ResponsiveValue,
  ResponsiveValueObject,
} from '../types/ResponsiveValue';

export function isResponsiveValue<T = unknown>(
  v: ResponsiveValue<T>,
): v is ResponsiveValueObject<T> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}
