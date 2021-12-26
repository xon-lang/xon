import { Tree } from '../tree';

export interface LiteralTree extends Tree {
  value: string | number | RegExp;
}
