import { Sizing } from './Sizing';

export type Spacing =
  | Sizing
  | [Sizing, Sizing]
  | [Sizing, Sizing, Sizing]
  | [Sizing, Sizing, Sizing, Sizing];
