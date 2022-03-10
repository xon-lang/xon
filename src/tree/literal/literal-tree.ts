import { Tree } from '../tree';

export class LiteralTree extends Tree {
  value: string | number | RegExp;
}
