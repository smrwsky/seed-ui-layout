import { Dictionary, isNil, reject } from 'ramda';

export function cleanObj<T = unknown>(obj: Dictionary<T>): Dictionary<T> {
  return reject<T>(isNil, obj);
}
