import { LiteralType, Tree } from '~/tree';

export abstract class LiteralTree extends Tree {
  value: LiteralType;
}
