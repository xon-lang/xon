import { LiteralType } from '~/tree/literal/literal-type';
import { Tree } from '~/tree/tree';

export abstract class LiteralTree extends Tree {
  abstract value: LiteralType;
}
